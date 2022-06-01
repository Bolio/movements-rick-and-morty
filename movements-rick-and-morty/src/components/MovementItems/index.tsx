import styled from "styled-components";

import NavigationBar from "../NavigationBar";

const MovementItemsStyled = styled.div`
  display: flex;
  height: 296px;
  background-color: aquamarine;
`;

const MovementItems = () => {
  return (
    <MovementItemsStyled>
      <NavigationBar />
    </MovementItemsStyled>
  );
};

export default MovementItems;
