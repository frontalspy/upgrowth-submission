import { ImagesItf } from "../images/types";

export interface ImagesApiItf {
  total: number;
  totalPages: number;
  results: ImagesItf[];
}
