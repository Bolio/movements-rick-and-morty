import React from "react";
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
  color: ${(props) => (props.color ? props.color : props.theme.colors.black)};
  font-weight: ${({ fontWeight }) => fontWeight};
  /* background-color: pink; */
`;

const Text = ({
  children,
  fontSize,
  left,
  right,
  top,
  textAlign,
  color,
  fontWeight,
}: TextProps) => {
  return (
    <TextStyled
      fontSize={fontSize}
      left={left}
      right={right}
      top={top}
      textAlign={textAlign}
      color={color}
      fontWeight={fontWeight}
    >
      {children}
    </TextStyled>
  );
};

export default Text;
