import styled from "styled-components";

import Text from "../Text";
import { Character } from "./types";

const ItemMovementsStyled = styled.div`
  display: flex;
  width: 100%;
  height: 55px;
  background-color: #8fe61e;

  div#container-image-title-type {
    display: flex;
    align-items: center;
    width: 50%;
    background-color: #1e5ae6;
  }
  div#container-date-amount {
    display: flex;
    align-items: center;
    width: 50%;
    background-color: #8f1ee6;
  }
`;

const ImageMovementContainerStyled = styled.div`
  width: 44px;
  height: 44px;
  position: relative;
  margin-left: 18px;
  margin-right: 16px;
  background-color: yellow;
  img {
    width: 100%;
    height: 100%;
  }
`;

const TitleTypeMovementContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: calc(100% - 78px);
  height: 44px;
  background-color: red;
`;

const DateAmountMovementContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
  height: 44px;
  background-color: green;
  span {
    margin-right: 24px;
  }
`;

const ItemMovements = ({ id, name, status, species, image }: Character) => {
  return (
    <ItemMovementsStyled>
      <div id="container-image-title-type">
        <ImageMovementContainerStyled>
          <img src={image} />
        </ImageMovementContainerStyled>
        <TitleTypeMovementContainerStyled>
          <Text fontSize="14px">{name}</Text>
          <Text fontSize="12px">{species}</Text>
        </TitleTypeMovementContainerStyled>
      </div>

      <div id="container-date-amount">
        <DateAmountMovementContainerStyled>
          <Text fontSize="12px">{id}</Text>
          <Text fontSize="14px">{status}</Text>
        </DateAmountMovementContainerStyled>
      </div>
    </ItemMovementsStyled>
  );
};

export default ItemMovements;
