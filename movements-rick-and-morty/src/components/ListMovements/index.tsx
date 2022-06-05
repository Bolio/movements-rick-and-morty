import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import NavigationBar from "../NavigationBar";
import ItemMovements from "../ItemMovements";
import Text from "../Text";
import { fetchListMovementsThunk } from "../../redux/modules/listMovements";
import { RickAndMortyState } from "../../redux/modules/listMovements";
import { Character } from "../ItemMovements/types";

const ListMovementsStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 296px;
  /* background-color: aquamarine; */
`;

const ListMovements = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(fetchListMovementsThunk());
  }, []);

  interface RootState {
    movements: RickAndMortyState;
  }

  const {
    listMovements: characters,
    fetching,
    error,
    errorMessage,
  }: RickAndMortyState = useSelector((state: RootState) => state.movements);

  if (fetching) {
    return (
      <Text fontSize="32px" textAlign="center" top="30px">
        Loading...
      </Text>
    );
  }

  return (
    <ListMovementsStyled>
      {error ? (
        <Text fontSize="32px" textAlign="center" top="30px">
          {errorMessage}
        </Text>
      ) : (
        characters?.map((character: Character) => (
          <ItemMovements
            id={character.id}
            name={character.name}
            image={character.image}
            status={character.status}
            species={character.species}
            key={character.id}
          />
        ))
      )}

      <NavigationBar />
    </ListMovementsStyled>
  );
};

export default ListMovements;
