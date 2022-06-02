import styled from "styled-components";

import { TextProps } from "./types";

const TextStyled = styled.span<TextProps>`
  position: relative;
  font-size: ${({ fontSize }) => fontSize};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  height: fit-content;
  background-color: pink;
`;

const Text = ({ children, fontSize, left, right }: TextProps) => {
  return (
    <TextStyled fontSize={fontSize} left={left} right={right}>
      {children}
    </TextStyled>
  );
};

export default Text;
