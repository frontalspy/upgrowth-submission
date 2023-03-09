import { useMemo } from "react";
import { useSearch } from "../context/search-context";
import { Image } from "./image";
import { Grid, Placeholder } from "./styles";

export const Images = () => {
  const { images, loading } = useSearch();

  if (loading) {
    return (
      <Grid>
        {Array(10)
          .fill("")
          .map(() => (
            <Placeholder />
          ))}
      </Grid>
    );
  }

  if (!images.length) {
    return null;
  }

  return useMemo(
    () => (
      <Grid>
        {images.map((image) => (
          <Image image={image} key={image.id} />
        ))}
      </Grid>
    ),
    [images]
  );
};
