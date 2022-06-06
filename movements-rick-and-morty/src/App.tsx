import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "./styled/themes/theme";
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
    <ThemeProvider theme={theme}>
      <AppStyled>
        <Welcome />
        <Main />
      </AppStyled>
    </ThemeProvider>
  );
}

export default App;
