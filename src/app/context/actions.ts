import { ImagesItf } from "../images/types";

export const SearchActions = {
  SET_SEARCH: "SET_SEARCH",
  SET_IMAGES: "SET_IMAGES",
  SET_LOADING: "SET_LOADING",
} as const;

interface SetSearchItf {
  type: typeof SearchActions.SET_SEARCH;
  data: string;
}

interface SetImagesItf {
  type: typeof SearchActions.SET_IMAGES;
  data: ImagesItf[];
}

interface SetLoadingItf {
  type: typeof SearchActions.SET_LOADING;
  data: boolean;
}

export const setSearch = (data: string): SetSearchItf => ({
  type: SearchActions.SET_SEARCH,
  data,
});

export const setImages = (data: ImagesItf[]): SetImagesItf => ({
  type: SearchActions.SET_IMAGES,
  data,
});

export const setLoading = (data: boolean): SetLoadingItf => ({
  type: SearchActions.SET_LOADING,
  data,
});

export type SearchActionsItf = SetSearchItf | SetImagesItf | SetLoadingItf;
