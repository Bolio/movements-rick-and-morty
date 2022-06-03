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
`;

const ListMovements = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListMovementsThunk());
  }, []);

  const characters: [] = useSelector((state) => state.movements.listMovements);
  const fetch: boolean = useSelector((state) => state.movements.fetching);
  const error: boolean = useSelector((state) => state.movements.error);
  const errorMessage: string = useSelector(
    (state) => state.movements.errorMessage
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
