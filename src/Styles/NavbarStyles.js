import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 0px) and (max-width: 798px) {
    display: inline-block;
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1120px;
  height: 100%;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (min-width: 0px) and (max-width: 798px) {
    display: inline-block;
    width: 100%;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.2rem;
  color: #ebc08b;
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (min-width: 0px) and (max-width: 798px) {
    width: 100%;
    display: block;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuItem = styled.li`
  height: 70%;
  padding: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 400;

  @media screen and (min-width: 0px) and (max-width: 798px) {
    width: 100%;
    display: inline-block;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuItemLink = styled.a`
  text-decoration: none;
  padding: 0 20px;
  color: #333333;
  font-weight: 400;
  font-size: 16px;
  margin: 0 5px;
  &:hover {
    background-color: #33333350;
    cursor: pointer;
  }
  @media screen and (min-width: 0px) and (max-width: 798px) {
    width: 25%;
    display: inline-block;
    justify-content: center;
    align-items: center;
  }
`;

export const Button = styled.button`
  display: inline-block;
  flex-direction: row;
  justify-content: center;
  background-color: ${props => props.inputColor || "white"};
  color: ${props => props.textColor || "black"};
  border: 0.5px solid #cccccc;
  padding: 11px 16px;
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  font-family: "Helvetica";
  border-radius: 4px;
  margin: ${props => props.marginButton || "0"};
  cursor: pointer;
  &:hover {
    background: ${props => props.inputColor || "#24B26B"};
    color: ${props => props.textColor || "white"};
  }

  @media screen and (min-width: 0px) and (max-width: 798px) {
    width: 35%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
