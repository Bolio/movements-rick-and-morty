import styled from "styled-components";
import Text from "../Text";

const YourMovementsTitleStyled = styled.div`
  display: flex;
  height: 44.5px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  /* background-color: orange; */
`;

const YourMovementsTitle = () => {
  return (
    <YourMovementsTitleStyled>
      <Text fontSize="24px" left="20px" fontWeight="600">
        Tus movimientos
      </Text>
      <Text fontSize="15" right="24px" fontWeight="normal" color="#22a8d2">
        Ver todos
      </Text>
    </YourMovementsTitleStyled>
  );
};

export default YourMovementsTitle;
