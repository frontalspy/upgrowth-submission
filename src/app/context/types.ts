import { Dispatch } from "react";
import { ImagesItf } from "../images/types";

export interface SearchContextItf {
  searchString: string;
  page: number | null;
  perPage: number;
  dispatchSearch: Dispatch<any>;
  images: ImagesItf[];
  loading: boolean;
}
