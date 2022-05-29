import React, { Component } from "react";
import {
  Container,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  Logo,
  Button,
} from "../Styles/NavbarStyles";
export default class Navbar extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Logo>IconLogo(x)</Logo>
          <Menu>
            <MenuItem>
              <MenuItemLink>Job Search</MenuItemLink>
              <MenuItemLink>About</MenuItemLink>
              <MenuItemLink>Pricing</MenuItemLink>
              <MenuItemLink>Contact</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <Button>Log in</Button>
            </MenuItem>
            <MenuItem>
              <Button inputColor="#24B26B" textColor="white">
                Try it Free
              </Button>
            </MenuItem>
          </Menu>
        </Wrapper>
      </Container>
    );
  }
}