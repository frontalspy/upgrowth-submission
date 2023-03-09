import { SearchActions, SearchActionsItf } from "./actions";
import { SearchContextItf } from "./types";

export const searchReducer = (
  state: SearchContextItf,
  action: SearchActionsItf
): SearchContextItf => {
  switch (action.type) {
    case SearchActions.SET_SEARCH:
      return { ...state, searchString: action.data };
    case SearchActions.SET_IMAGES:
      return { ...state, images: action.data };
    case SearchActions.SET_LOADING:
      return { ...state, loading: action.data };
    default:
      return state;
  }
};
