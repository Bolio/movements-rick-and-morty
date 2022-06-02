import styled from "styled-components";

import NavigationBar from "../NavigationBar";
import ItemMovements from "../ItemMovements";

const ListMovementsStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 296px;
  background-color: aquamarine;
`;

const ListMovements = () => {
  return (
    <ListMovementsStyled>
      <ItemMovements />
      {/* <ItemMovements />
      <ItemMovements />
      <ItemMovements /> */}
      <NavigationBar />
    </ListMovementsStyled>
  );
};

export default ListMovements;
