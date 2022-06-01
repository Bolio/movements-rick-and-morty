import styled from "styled-components";

const TextStyled = styled.span`
  position: relative;
  font-size: ${({ fontSize }) => fontSize};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  height: fit-content;
  background-color: pink;
`;

const Text = ({ children, fontSize, left, right }) => {
  return (
    <TextStyled fontSize={fontSize} left={left} right={right}>
      {children}
    </TextStyled>
  );
};

export default Text;
