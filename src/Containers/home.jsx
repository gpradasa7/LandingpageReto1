import React, { Component } from "react";
import Navbar from "../Components/navbar";
import Section1 from "../Components/Section1";
import Section2 from "../Components/Section2";
import { DivStyle, GlobalStyle } from "../Styles/GlobalStyles";

export default class Home extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <DivStyle>
          <Navbar />
          <Section1 />
          <Section2 />
        </DivStyle>
      </>
    );
  }
}
