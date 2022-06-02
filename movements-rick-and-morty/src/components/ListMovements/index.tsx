import styled from "styled-components";

import NavigationBar from "../NavigationBar";

const ListMovementsStyled = styled.div`
  display: flex;
  height: 296px;
  background-color: aquamarine;
`;

const ListMovements = () => {
  return (
    <ListMovementsStyled>
      <NavigationBar />
    </ListMovementsStyled>
  );
};

export default ListMovements;
