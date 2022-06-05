import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import NotificationsIcon from "@mui/icons-material/Notifications";

import YourNextPayment from "../YourNextPayment";
import Text from "../Text";

const ActionsStyled = styled.div`
  display: flex;
  width: 100%;
  height: 116px;
  background-color: #783183;
  justify-content: center;
  position: relative;
  div#container-action-icons {
    position: relative;
    width: 100%;
    top: 36px;

    div {
      display: flex;
      justify-content: center;
      position: absolute;
      :nth-child(1) {
        left: 60px;
      }
      :nth-child(2) {
        left: 166px;
        svg {
          transform: rotate(90deg);
        }
      }
      :nth-child(3) {
        right: 63px;
      }
      span {
        top: 28px;
        color: white;
        font-size: 8px;
      }
      svg {
        position: absolute;
        width: 21px;
        height: 20px;
        fill: white;
      }
    }
  }
`;

const Actions = () => {
  return (
    <ActionsStyled>
      <div id="container-action-icons">
        <div>
          <StarIcon />
          <Text>Crear logro</Text>
        </div>
        <div>
          <LocalOfferIcon />
          <Text>Crear logro</Text>
        </div>
        <div>
          <NotificationsIcon />
          <Text>Crear logro</Text>
        </div>
      </div>
      <YourNextPayment />
    </ActionsStyled>
  );
};

export default Actions;
