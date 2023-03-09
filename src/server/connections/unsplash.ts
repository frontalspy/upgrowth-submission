import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: "INSET_KEY_HERE",
});

export const searchUnsplash = () => {
  return unsplash.search.getPhotos({
    query: "abc",
  });
};
