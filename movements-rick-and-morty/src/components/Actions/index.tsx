import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import NotificationsIcon from "@mui/icons-material/Notifications";

import YourNextPayment from "../YourNextPayment";
import React from "react";

const ActionsStyled = styled.div`
  display: flex;
  width: 100%;
  height: 116px;
  margin-bottom: 182px;
  background-color: #783183;
  justify-content: center;
  position: relative;
  div#container-action-icons {
    position: relative;
    width: 100%;
    top: 36px;
    svg {
      position: absolute;
      width: 21px;
      height: 20px;
      fill: white;
      :nth-child(1) {
        left: 69px;
      }
      :nth-child(2) {
        left: 176px;
      }
      :nth-child(3) {
        right: 74px;
      }
    }
  }
`;

const Actions = () => {
  return (
    <ActionsStyled>
      <div id="container-action-icons">
        <StarIcon />
        <StarIcon />
        <NotificationsIcon />
      </div>
      <YourNextPayment />
    </ActionsStyled>
  );
};

export default Actions;
