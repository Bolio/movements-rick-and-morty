import styled from "styled-components";

import Actions from "../Actions";
import YourMovementsTitle from "../YourMovementsTitle";
import ListMovements from "../ListMovements";
const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  height: 626px;
  /* background-color: blue; */
  div#container-movements {
    position: relative;
    top: 182px;
  }
`;

const Main = () => {
  return (
    <MainStyled>
      <Actions />
      <div id="container-movements">
        <YourMovementsTitle />
        <ListMovements />
      </div>
    </MainStyled>
  );
};

export default Main;
