import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import NotificationsIcon from "@mui/icons-material/Notifications";

const ActionsStyled = styled.div`
  display: flex;
  width: 100%;
  height: 116px;
  margin-bottom: 182px;
  background-color: purple;
  justify-content: center;
  div {
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
      <div>
        <StarIcon />
        <StarIcon />
        <NotificationsIcon />
      </div>
    </ActionsStyled>
  );
};

export default Actions;
