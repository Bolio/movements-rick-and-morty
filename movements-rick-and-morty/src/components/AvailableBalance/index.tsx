import styled from "styled-components";

const AvailableBalanceStyled = styled.div`
  display: flex;
  width: 300px;
  height: 86px;
  position: absolute;
  z-index: 1;
  top: 118px;
  border-radius: 4px;
  box-shadow: 0 1px 9px 0 rgba(56, 56, 56, 0.2);
  background-color: white;
`;

const AvailableBalance = () => {
  return <AvailableBalanceStyled></AvailableBalanceStyled>;
};

export default AvailableBalance;
