import express from "express";
import { createApi } from "unsplash-js";
import cors from "cors";

// import { searchUnsplash } from "./connections/unsplash";
const app = express();
const port = 8000;
app.use(cors());

const unsplash = createApi({
  accessKey: "INSET_KEY_HERE",
});

export const searchUnsplash = (query: any) => {
  return unsplash.search
    .getPhotos({
      query: query.search,
      page: query.page || 1,
    })
    .then((v) => v.response);
};

app.get("/photos/search", (req, res) => {
  searchUnsplash(req.query).then((photos) => res.send(photos));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
