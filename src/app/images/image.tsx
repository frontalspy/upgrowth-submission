import { FC } from "react";
import { ImagesItf } from "./types";
import { ImageAuthor, ImageContainer, ImageFigure, ImageMeta } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faUser } from "@fortawesome/free-solid-svg-icons";

interface ImageProps {
  image: ImagesItf;
}
export const Image: FC<ImageProps> = ({ image }) => {
  return (
    <ImageContainer>
      <ImageFigure>
        <a href={image.links.html} target="_blank">
          <img src={image.urls.small} alt={image.altDescription} />
        </a>
      </ImageFigure>
      <ImageMeta>
        <ImageAuthor>
          <FontAwesomeIcon icon={faUser} />
          <a rel="author" href="">
            {image.user.username}
          </a>
        </ImageAuthor>
        <span>
          <FontAwesomeIcon icon={faThumbsUp} /> {image.likes}
        </span>
      </ImageMeta>
    </ImageContainer>
  );
};
