import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent, useCallback } from "react";
import { useSearch } from "../context/search-context";
import { setImages, setLoading, setSearch } from "../context/actions";
import { fetchApi } from "../utilities/api";
import { API } from "../utilities/consts";
import { ImagesApiItf } from "./types";

export const Form = () => {
  const { searchString, dispatchSearch } = useSearch();
  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      if (!!searchString) {
        dispatchSearch(setLoading(true));
        // API is too quick, lets give it some time
        setTimeout(() => {
          fetchApi<ImagesApiItf>(
            `${API}/photos/search?search=${searchString}`,
            "GET"
          )
            .then((resp) => {
              dispatchSearch(setImages(resp.results));
            })
            .finally(() => dispatchSearch(setLoading(false)));
        }, 2000);
      }
    },
    [searchString]
  );

  const handleInput = useCallback((value: string) => {
    dispatchSearch(setSearch(value));
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={searchString}
        onInput={(v) => handleInput(v.currentTarget.value)}
      />
      <button type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};
