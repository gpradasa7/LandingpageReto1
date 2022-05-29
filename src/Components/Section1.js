import React, { Component } from "react";
import { Button } from "../Styles/NavbarStyles";
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

export default class Section1 extends Component {
  render() {
    return (
      <Maincontainer>
        <MiniSection1>
          <H1>We support your challenge in new areas.</H1>
          <Paragraph>
            Our highly qualified headhunters, who have passed a rigorous
            screening process, will introduce you to your new career
            opportunity.
          </Paragraph>
          <Button marginButton="0 2% 0 0">Try it Free</Button>
          <Button>Explore</Button>
        </MiniSection1>
        <MiniSection2>
          <Card>
            <Img src={images[0].img} alt="felicity" />
            <H4>{images[0].name}</H4>
            <Span>{images[0].title}</Span>
            <ParagraphSect1>{images[0].presentation}</ParagraphSect1>
          </Card>
          <Card>
            <img src={images[1].img} alt="felicity" />
            <H4>{images[1].name}</H4>
            <Span>{images[1].title}</Span>
            <ParagraphSect1>{images[1].presentation}</ParagraphSect1>
          </Card>
          <Card>
            {" "}
            <img src={images[2].img} alt="felicity" />
            <H4>{images[2].name}</H4>
            <Span>{images[2].title}</Span>
            <ParagraphSect1>{images[2].presentation}</ParagraphSect1>
          </Card>
          <Card>
            {" "}
            <img src={images[3].img} alt="felicity" />
            <H4>{images[3].name}</H4>
            <Span>{images[3].title}</Span>
            <ParagraphSect1>{images[3].presentation}</ParagraphSect1>
          </Card>
          <Card>
            {" "}
            <img src={images[4].img} alt="felicity" />
            <H4>{images[4].name}</H4>
            <Span>{images[4].title}</Span>
            <ParagraphSect1>{images[4].presentation}</ParagraphSect1>
          </Card>
          <Card>
            {" "}
            <img src={images[5].img} alt="felicity" />
            <H4>{images[5].name}</H4>
            <Span>{images[5].title}</Span>
            <ParagraphSect1>{images[5].presentation}</ParagraphSect1>
          </Card>
        </MiniSection2>
      </Maincontainer>
    );
  }
}
