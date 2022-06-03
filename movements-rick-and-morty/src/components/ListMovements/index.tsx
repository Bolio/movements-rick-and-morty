import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import NavigationBar from "../NavigationBar";
import ItemMovements from "../ItemMovements";
import Text from "../Text";
import { fetchListMovementsThunk } from "../../redux/modules/listMovements";

const ListMovementsStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 296px;
  background-color: aquamarine;
  span#loading-message {
    text-align: center;
    top: 30px;
  }
`;

const ListMovements = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListMovementsThunk());
  }, []);

  const characters: [] = useSelector((state) => state.movements.listMovements);
  const fetch: boolean = useSelector((state) => state.movements.fetching);

  return (
    <ListMovementsStyled>
      {fetch ? (
        <Text id="loading-message" fontSize="32px">
          Loading...
        </Text>
      ) : (
        characters.map((character) => (
          <ItemMovements character={character} key={character.id} />
        ))
      )}
      <NavigationBar />
    </ListMovementsStyled>
  );
};

export default ListMovements;
