import styled from "styled-components";

const NavigationBarStyled = styled.nav`
  display: flex;
  width: 100%;
  z-index: 1;
  height: 82px;
  position: fixed;
  bottom: 0;
  /* background-color: lightgrey; */
`;

const ListItemsNavigationBarStyled = styled.ul`
  display: flex;
  width: 100%;
  z-index: 1;
  height: 82px;
  align-items: center;
  justify-content: space-around;
  /* background-color: lightgrey; */
  li {
    display: block;
  }
`;

const NavigationBar = () => {
  return (
    <NavigationBarStyled>
      <ListItemsNavigationBarStyled>
        <li>
          <div>
            <a>A</a>
          </div>
        </li>
        <li>
          <div>
            <a>A</a>
          </div>
        </li>
        <li>
          <div>
            <a>A</a>
          </div>
        </li>
        <li>
          <div>
            <a>A</a>
          </div>
        </li>
        <li>
          <div>
            <a>A</a>
          </div>
        </li>
      </ListItemsNavigationBarStyled>
    </NavigationBarStyled>
  );
};

export default NavigationBar;
