import styled from "styled-components";

import { TextProps } from "./types";

const TextStyled = styled.span<TextProps>`
  position: relative;
  font-size: ${({ fontSize }) => fontSize};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  height: fit-content;
  text-align: ${({ textAlign }) => textAlign};
  background-color: pink;
`;

const Text = ({
  children,
  fontSize,
  left,
  right,
  top,
  textAlign,
}: TextProps) => {
  return (
    <TextStyled
      fontSize={fontSize}
      left={left}
      right={right}
      top={top}
      textAlign={textAlign}
    >
      {children}
    </TextStyled>
  );
};

export default Text;
