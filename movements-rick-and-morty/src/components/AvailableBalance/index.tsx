import styled from "styled-components";

import Text from "../Text";

const AvailableBalanceStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 86px;
  padding: 12px;
  position: absolute;
  z-index: 1;
  top: 118px;
  border-radius: 4px;
  box-shadow: 0 1px 9px 0 rgba(56, 56, 56, 0.2);
  background-color: white;
  span:nth-child(1) {
    margin-bottom: 7px;
  }
`;

const AvailableBalance = () => {
  return (
    <AvailableBalanceStyled>
      <Text fontSize="12px">SALDO DISPONIBLE</Text>
      <Text fontSize="34px">$1,499,970.00</Text>
    </AvailableBalanceStyled>
  );
};

export default AvailableBalance;
