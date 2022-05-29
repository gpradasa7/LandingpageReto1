import React, { Component } from "react";
import { Button } from "../Styles/NavbarStyles";
import location from "../assets/location.png";
import job from "../assets/job.png";
import images from "../assets/images";
import {
  CardSection,
  ContainerSection2,
  H2,
  H4,
  Img,
  Input,
  ItemsSection2,
  MinicardSection,
  SearchSection,
} from "../Styles/Section2";

export default class Section2 extends Component {
  render() {
    return (
      <ContainerSection2>
        <ItemsSection2>Trusted by the world's leading companies</ItemsSection2>
        <ItemsSection2>
          <img src={images[6].logo} alt="imagen" />
        </ItemsSection2>
        <ItemsSection2>
          <img src={images[7].logo} alt="imagen" />
        </ItemsSection2>
        <ItemsSection2>
          <img src={images[8].logo} alt="imagen" />
        </ItemsSection2>
        <ItemsSection2>
          <img src={images[9].logo} alt="imagen" />
        </ItemsSection2>
        <ItemsSection2>
          <img src={images[10].logo} alt="imagen" />
        </ItemsSection2>

        <SearchSection>
          <H2>Search for your area of interest</H2>
          <H4>Please enter your desired industry, job title, and skills</H4>
          <Input
            type="text"
            placeholder="engineer, Internet and Web Industry"
          />
          <Button inputColor="#333333" textColor="white">
            Search
          </Button>
        </SearchSection>

        <CardSection>
          <MinicardSection>
            <H4>Leader of iOS engineers for mobility services</H4>
            <Img src={location} alt="iconlocation" />
            <span>California</span>
            <Img src={job} alt="iconlocation" />
            <span>Engineer</span>
          </MinicardSection>
          <MinicardSection>
            <H4>Leader of iOS engineers for mobility services</H4>
            <Img src={location} alt="iconlocation" />
            <span>Oregon</span>
            <Img src={job} alt="iconlocation" />
            <span>Sales Manager</span>
          </MinicardSection>
          <MinicardSection>
            <H4>Leader of iOS engineers for mobility services</H4>
            <Img src={location} alt="iconlocation" />
            <span>Florida</span>
            <Img src={job} alt="iconlocation" />
            <span>Marketer</span>
          </MinicardSection>
          <MinicardSection>
            <H4>Leader of iOS engineers for mobility services</H4>
            <Img src={location} alt="iconlocation" />
            <span>Texas</span>
            <Img src={job} alt="iconlocation" />
            <span>CFO</span>
          </MinicardSection>
        </CardSection>
      </ContainerSection2>
    );
  }
}
