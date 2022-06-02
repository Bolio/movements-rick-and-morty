import styled from "styled-components";

import { ButtonTextProps } from "./types";

const ButtonTextStyled = styled.button<ButtonTextProps>`
  position: relative;
  font-size: ${({ fontSize }) => fontSize};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 4px;
  border: none;
  color: white;
`;

const ButtonText = ({
  children,
  fontSize,
  left,
  right,
  width,
  height,
  backgroundColor,
}: ButtonTextProps) => {
  return (
    <ButtonTextStyled
      fontSize={fontSize}
      left={left}
      right={right}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
    >
      {children}
    </ButtonTextStyled>
  );
};

export default ButtonText;
