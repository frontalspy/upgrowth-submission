import React, { useContext } from "react";
import { SearchContextItf } from "./types";

export const searchContextInit: SearchContextItf = {
  searchString: "",
  perPage: 5,
  page: null,
  dispatchSearch: () => null,
  images: [],
  loading: false,
};

export const SearchContext =
  React.createContext<SearchContextItf>(searchContextInit);

export const useSearch = () => useContext(SearchContext);
