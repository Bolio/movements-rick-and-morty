import styled from "styled-components";

import Text from "../Text";
import ProfilePhoto from "../ProfilePhoto";
import AvailableBalance from "../AvailableBalance";

const WelcomeStyled = styled.header`
  display: flex;
  height: 186px;
  justify-content: center;
  align-items: center;
  /* background-color: green; */
  div#container-info-welcome {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    top: 73px;
    position: absolute;
  }
`;

const Welcome = () => {
  const nameUser = "José";
  const profilePhotoURL = "/src/assets/profile-photo-4.png";

  return (
    <WelcomeStyled>
      <div id="container-info-welcome">
        <Text>{`Hola ${nameUser}`}</Text>
        <ProfilePhoto src={profilePhotoURL} />
      </div>
      <AvailableBalance />
    </WelcomeStyled>
  );
};

export default Welcome;
