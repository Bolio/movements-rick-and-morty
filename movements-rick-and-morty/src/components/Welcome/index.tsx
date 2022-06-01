import styled from "styled-components";

const WelcomeStyled = styled.header`
  display: flex;
  height: 186px;
  background-color: green;
`;

const Welcome = () => {
  return <WelcomeStyled>
    <h1>WELCOME</h1>
  </WelcomeStyled>;
};

export default Welcome;
