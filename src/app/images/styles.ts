import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { spacing } from "../styles/vars";

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: ${spacing.large} ${spacing.medium};
  padding: ${spacing.large};
`;

export const ImageContainer = styled.div`
  width: 300px;
`;

export const ImageFigure = styled.figure`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 250px;
  overflow: hidden;
  > a {
    display: inline-block;
    width: 100%;
  }
`;

export const ImageAuthor = styled.span`
  svg {
    margin-right: ${spacing.small};
  }
`;

export const ImageMeta = styled.div`
  display: flex;
  justify-align: space-between;
  justify-content: space-between;
`;

export const Placeholder = styled.div`
  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }

  width: 300px;
  height: 250px;
  display: block;
  background: #eee;
  background: linear-gradient(100deg, #aaa 8%, #f1f1f1 18%, #aaa 33%);
  background-size: 200% 100%;
  animation: 1s shine infinite linear;
`;
