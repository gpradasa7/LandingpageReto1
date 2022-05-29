import React, { Component } from "react";
import {
  Button,
  Container,
  Menu,
  MenuItem,
  MenuItemLink,
} from "../Styles/NavbarStyles";
import {
  H1,
  Maincontainer,
  MiniSection1,
  MiniSection2,
  Paragraph,
  Card,
  Img,
  Span,
  H4,
  ParagraphSect1,
} from "../Styles/Section1Styles";
import images from "../assets/images";

export default class Section2 extends Component {
  render() {
    return (
      <Maincontainer>
        <Container>
          <Menu>
            <MenuItem>
              <MenuItemLink>
                Trusted by the world's leading companies
              </MenuItemLink>
              <MenuItemLink>{images[6].logo}</MenuItemLink>
              <MenuItemLink>{images[7].logo}</MenuItemLink>
              <MenuItemLink>{images[8].logo}</MenuItemLink>
              <MenuItemLink>{images[9].logo}</MenuItemLink>
              <MenuItemLink>{images[10].logo}</MenuItemLink>
            </MenuItem>
          </Menu>
        </Container>
      </Maincontainer>
    );
  }
}
