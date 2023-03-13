import { Dispatch } from "react";
import { ImagesItf } from "../images/types";
import { SearchActionsItf } from "./actions";

export interface SearchContextItf {
  searchString: string;
  page: number | null;
  perPage: number;
  dispatchSearch: Dispatch<SearchActionsItf>;
  images: ImagesItf[];
  loading: boolean;
}
