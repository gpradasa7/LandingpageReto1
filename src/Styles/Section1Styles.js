import styled from "styled-components";

export const Maincontainer = styled.div`
  width: 100%;
  max-width: 1160px;
  display: flex;
  justify-content: center;
  height: max-content;
  @media screen and (min-width: 0px) and (max-width: 798px) {
    flex-wrap: wrap;
    width: 100%;
    margin: 0;
    justify-content: center;
    text-align: center;
    font-size: 18px;
  }
`;

export const MiniSection1 = styled.div`
  width: 50%;
  max-width: 460px;
  margin: 10% 0 0 1.85%;
  padding-right: 8%;
  margin-left: 2%;
  @media screen and (min-width: 0px) and (max-width: 798px) {
    flex-wrap: wrap;
    display: block;
    text-align: justify;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 18px;
    height: min-content;
  }
`;

export const H1 = styled.h1`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  text-align: justify;
  @media screen and (min-width: 0px) and (max-width: 798px) {
    flex-wrap: wrap;
    display: block;
    text-align: justify;
    justify-content: center;
    text-align: center;
    font-size: 32px;
  }
`;
export const Paragraph = styled.p`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  color: #333333;
  text-align: justify;
`;

export const MiniSection2 = styled.div`
  width: 50%;
  margin: 5% 0 0 1%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (min-width: 0px) and (max-width: 798px) {
    display: flex;
    width: 100%;
    text-align: center;
  }
`;

export const Card = styled.div`
  flex-wrap: wrap;
  margin: 1.2%;
  width: 176px;
  height: 240px;
  background: #ffffff;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.1);
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  display: block;
  text-align: center;
  &:hover {
    box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.4);
    background: #ffffff50;
    transform: translateY(-7px);
    transition: ease 0.5s;
    cursor: pointer;
  }
  @media screen and (min-width: 0px) and (max-width: 798px) {
    padding: 10px;
  }
`;

export const Img = styled.img`
  margin-top: 5%;
  justify-content: center;
`;
export const H4 = styled.h4`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
`;

export const Span = styled.span`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 100%;
`;
export const ParagraphSect1 = styled.p`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 140%;
  color: #666666;
`;
