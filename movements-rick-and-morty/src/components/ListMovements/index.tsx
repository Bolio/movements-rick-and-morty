import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import NavigationBar from "../NavigationBar";
import ItemMovements from "../ItemMovements";
import Text from "../Text";
import { fetchListMovementsThunk } from "../../redux/modules/listMovements";
import { RickAndMortyState } from "../../redux/modules/listMovements";

const ListMovementsStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 296px;
  background-color: aquamarine;
`;

const ListMovements = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(fetchListMovementsThunk());
  }, []);

  interface RootState {
    movements: RickAndMortyState;
  }

  const characters: [] = useSelector((state: RootState) => state.movements.listMovements);
  const fetch: boolean = useSelector((state: RootState) => state.movements.fetching);
  const error: boolean = useSelector((state: RootState) => state.movements.error);
  const errorMessage: string = useSelector(
    (state: RootState) => state.movements.errorMessage
  );

  if (fetch) {
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
        characters?.map((character) => (
          <ItemMovements character={character} key={character.id} />
        ))
      )}

      <NavigationBar />
    </ListMovementsStyled>
  );
};

export default ListMovements;
