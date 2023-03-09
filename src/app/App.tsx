import "./styles/normalize.css";
import React, { useReducer } from "react";
import { AppContainer, Heading } from "./styles";
import { Form } from "./form/form";
import { SearchContext, searchContextInit } from "./context/search-context";
import { searchReducer } from "./context/reducer";
import { Images } from "./images";

export const App = () => {
  const [state, dispatchSearch] = useReducer(searchReducer, searchContextInit);

  return (
    <AppContainer>
      <Heading>Search for your fav image</Heading>
      <SearchContext.Provider
        value={{
          ...state,
          dispatchSearch,
        }}
      >
        <Form />
        <Images />
      </SearchContext.Provider>
    </AppContainer>
  );
};
