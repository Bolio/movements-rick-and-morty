import styled from "styled-components";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

const NavigationBarStyled = styled.nav`
  display: flex;
  width: 100%;
  z-index: 1;
  height: 82px;
  position: fixed;
  bottom: 0;
  background-color: white;
  border-radius: 10px 10px 0 0;
  border: solid 0.5px rgba(9, 22, 31, 0.3);
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
    position: relative;
    bottom: 11px;
  }
`;

const NavigationBar = () => {
  return (
    <NavigationBarStyled>
      <ListItemsNavigationBarStyled>
        <li>
          <a>
            <HomeOutlinedIcon />
          </a>
        </li>
        <li>
          <a>
            <PaidOutlinedIcon />
          </a>
        </li>
        <li>
          <a>
            <CreditCardOutlinedIcon />
          </a>
        </li>
        <li>
          <a>
            <StarBorderOutlinedIcon />
          </a>
        </li>
        <li>
          <a>
            <NotificationsOutlinedIcon />
          </a>
        </li>
      </ListItemsNavigationBarStyled>
    </NavigationBarStyled>
  );
};

export default NavigationBar;
