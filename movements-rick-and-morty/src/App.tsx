import styled from "styled-components";
import Welcome from "./components/Welcome";
import Main from "./components/Main";

const AppStyled = styled.div`
  display: block;
  margin: 0;
  padding: 0;
  /* background-color: red; */
`;

function App() {
  return (
    <AppStyled>
      <Welcome />
      <Main />
    </AppStyled>
  );
}

export default App;
