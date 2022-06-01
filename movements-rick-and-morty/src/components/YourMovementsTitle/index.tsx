import styled from "styled-components";
import Text from "../Text";

const YourMovementsTitleStyled = styled.div`
  display: flex;
  height: 32px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: orange;
`;

const YourMovementsTitle = () => {
  return (
    <YourMovementsTitleStyled>
      <Text fontSize="24px" left="20px">
        Tus movimientos
      </Text>
      <Text fontSize="15" right="24px">
        Ver todos
      </Text>
    </YourMovementsTitleStyled>
  );
};

export default YourMovementsTitle;
