import styled from "styled-components";

import Actions from "../Actions";
import YourMovementsTitle from "../YourMovementsTitle";
import ListMovements from "../ListMovements";
const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  height: 626px;
  /* background-color: blue; */
`;

const Main = () => {
  return (
    <MainStyled>
      <Actions />
      <YourMovementsTitle />
      <ListMovements />
    </MainStyled>
  );
};

export default Main;
