import { useState, useEffect } from "react";
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
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const URL = "https://rickandmortyapi.com/api/character";

    fetch(URL)
      .then((response) => response.json())
      .then((res) => {
        console.log("res:", res);
        setCharacters(res.results);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }, []);

  console.log("characters:", characters);
  return (
    <ListMovementsStyled>
      {characters.map((character) => (
        <ItemMovements character={character} />
      ))}
      <NavigationBar />
    </ListMovementsStyled>
  );
};

export default ListMovements;
