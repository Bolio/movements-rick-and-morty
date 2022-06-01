import styled from "styled-components";

import Actions from "../Actions";
import YourMovementsTitle from "../YourMovementsTitle";
import MovementItems from "../MovementItems";
const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  height: 626px;
  background-color: blue;
`;

const Main = () => {
  return (
    <MainStyled>
      <Actions>23123423423</Actions>
      <YourMovementsTitle>23123423423</YourMovementsTitle>
      <MovementItems>ITEMS DE MOVIMIENTOS</MovementItems>
    </MainStyled>
  );
};

export default Main;
