import styled from "styled-components";
import PaidIcon from "@mui/icons-material/Paid";
import PaymentIcon from "@mui/icons-material/Payment";

import Text from "../Text";
import ButtonText from "../Buttons/ButtonText";

const YourNextPaymentStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 186px;
  padding: 12px;
  position: absolute;
  z-index: 1;
  top: 91px;
  border-radius: 4px;
  box-shadow: 0 1px 9px 0 rgba(56, 56, 56, 0.2);
  background-color: white;
  /* span:nth-child(1) {
    margin-bottom: 7px;
  } */
  div {
    :nth-child(2) {
      height: 40px;
      margin-bottom: 8px;
    }

    :nth-child(3) {
      position: relative;
      /* background-color: green; */
      span {
        width: fit-content;
        display: block;
        :nth-child(1) {
          margin-bottom: 4px;
        }
      }
      button {
        position: absolute;
        right: 0;
        top: 8px;
      }
    }
    :nth-child(4) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
      gap: 10px;
      margin-top: 12px;
      span {
        :nth-child(1) {
          svg {
            width: 11px;
            height: 13px;
            margin-right: 14px;
          }
        }
        :nth-child(2) {
          display: flex;
          justify-content: flex-end;
          right: 7px;
        }
        :nth-child(3) {
          svg {
            width: 15px;
            height: 12px;
            margin-right: 9px;
          }
        }
        :nth-child(4) {
          display: flex;
          justify-content: flex-end;
          right: 7px;
        }
        svg {
          fill: #5acaee;
        }
      }
    }
  }
`;

const YourNextPayment = () => {
  return (
    <YourNextPaymentStyled>
      <div>
        <Text fontSize="16px">Tu próximo pago</Text>
      </div>
      <div>
        <Text fontSize="28px">$28,860.00</Text>
      </div>
      <div>
        <Text fontSize="14px">Fecha de pago</Text>
        <Text fontSize="18px">16 Enero</Text>
        <ButtonText
          fontSize="12px"
          width="120px"
          height="32px"
          backgroundColor="#5acaee"
        >
          PAGAR AHORA
        </ButtonText>
      </div>
      <div>
        <Text fontSize="12px">
          <PaidIcon id="paid-icon" />
          Mis logros
        </Text>
        <Text fontSize="12px">$27,260.00</Text>
        <Text fontSize="12px">
          <PaymentIcon id="payment-icon" />
          Compras con TDC
        </Text>
        <Text fontSize="12px">$1,600.00</Text>
      </div>
    </YourNextPaymentStyled>
  );
};

export default YourNextPayment;
