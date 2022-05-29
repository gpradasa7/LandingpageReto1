import styled from "styled-components";

export const ItemsSection2 = styled.div`
  padding: 0;
  color: #333333;
  font-weight: 400;
  font-size: 16px;
  margin: 5% 0 0;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  padding: 10px;
  width: 130px;
  flex-wrap: wrap;
  &:hover {
    background-color: lightgrey;
  }
`;

export const ContainerSection2 = styled.div`
  width: 100%;
  margin: 2% 0 0;
  display: flex;
  justify-content: center;

  height: min-content;
  background: #fafafa;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (min-width: 0px) and (max-width: 798px) {
    flex-wrap: wrap;
    width: 100%;
    display: flex;
    text-align: justify;
    justify-content: center;
    text-align: center;
    font-size: 18px;
  }
`;

export const SearchSection = styled.div`
  width: 100%;
  height: auto;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const H2 = styled.h2`
  width: 100%;
  display: inline-flexbox;
  justify-content: center;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  margin: 2% 0;
`;
export const H4 = styled.h4`
  width: 100%;
  display: inline-flexbox;
  justify-content: center;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  margin: 2%;
`;
export const Input = styled.input`
  display: block;
  width: 25%;
  height: 37px;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 4px;
  margin: 0 10px;
  padding: 0 4%;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  color: #999999;
`;
export const CardSection = styled.div`
  margin-top: 2%;
  width: 100%;
  justify-content: center;
  display: flex;
  @media screen and (min-width: 0px) and (max-width: 798px) {
    flex-wrap: wrap;
    width: 100%;
    display: flex;
    text-align: justify;
    justify-content: center;
    text-align: center;
    font-size: 18px;
  }
`;

export const MinicardSection = styled.div`
  width: 248px;
  height: min-content;
  flex-wrap: wrap;
  padding: 0.5 1.2%;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 0 0.7%;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  background: #ffffff;
  box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  &:hover {
    box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.4);
    background: #ffffff50;
    transform: translateY(-7px);
    transition: ease 0.5s;
    cursor: pointer;
  }
  @media screen and (min-width: 0px) and (max-width: 798px) {
    flex-wrap: wrap;
    margin: 2%;
    padding: 4%;
    display: flex;
    text-align: justify;
    justify-content: center;
    text-align: center;
  }
`;
export const Img = styled.img`
  margin: 0.5% 2.5%;
`;
