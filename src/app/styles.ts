import styled from "styled-components";
import { spacing } from "./styles/vars";

export const AppContainer = styled.main`
  width: 100vw;
  height: 100vh;
  text-align: center;
  margin: auto;
  background-color: #f1f1f1;
`;

export const Heading = styled.h1`
  padding-top: ${spacing.large};
  margin: 0 0 ${spacing.large} 0;
`;
