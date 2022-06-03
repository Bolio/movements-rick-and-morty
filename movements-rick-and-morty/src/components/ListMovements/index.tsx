import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import NavigationBar from "../NavigationBar";
import ItemMovements from "../ItemMovements";
import { fetchListMovementsThunk } from "../../redux/modules/listMovements";

const ListMovementsStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 296px;
  background-color: aquamarine;
`;

const ListMovements = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListMovementsThunk());
  }, []);

  const characters: [] = useSelector((state) => state.movements.listMovements);

  return (
    <ListMovementsStyled>
      {characters.map((character) => (
        <ItemMovements character={character} key={character.id} />
      ))}
      <NavigationBar />
    </ListMovementsStyled>
  );
};

export default ListMovements;
