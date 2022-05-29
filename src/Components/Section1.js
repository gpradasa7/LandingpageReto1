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
import { arr } from "../assets/images";

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
            <Img src={arr[0].img} alt="felicity" />
            <H4>{arr[0].name}</H4>
            <Span>{arr[0].title}</Span>
            <ParagraphSect1>{arr[0].presentation}</ParagraphSect1>
          </Card>
          <Card>
            <img src={arr[1].img} alt="felicity" />
            <H4>{arr[1].name}</H4>
            <Span>{arr[1].title}</Span>
            <ParagraphSect1>{arr[1].presentation}</ParagraphSect1>
          </Card>
          <Card>
            {" "}
            <img src={arr[2].img} alt="felicity" />
            <H4>{arr[2].name}</H4>
            <Span>{arr[2].title}</Span>
            <ParagraphSect1>{arr[2].presentation}</ParagraphSect1>
          </Card>
          <Card>
            {" "}
            <img src={arr[3].img} alt="felicity" />
            <H4>{arr[3].name}</H4>
            <Span>{arr[3].title}</Span>
            <ParagraphSect1>{arr[3].presentation}</ParagraphSect1>
          </Card>
          <Card>
            {" "}
            <img src={arr[4].img} alt="felicity" />
            <H4>{arr[4].name}</H4>
            <Span>{arr[4].title}</Span>
            <ParagraphSect1>{arr[4].presentation}</ParagraphSect1>
          </Card>
          <Card>
            {" "}
            <img src={arr[5].img} alt="felicity" />
            <H4>{arr[5].name}</H4>
            <Span>{arr[5].title}</Span>
            <ParagraphSect1>{arr[5].presentation}</ParagraphSect1>
          </Card>
        </MiniSection2>
      </Maincontainer>
    );
  }
}
