import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  padding: 0.5rem 0rem 0 0;
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;

  color: ${(props) => props.theme.colors.primary};
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;

  font-size: 18px;

  padding: 0 10% 0 0;
  margin: 0;

  gap: 2rem;

  color: ${(props) => props.theme.colors.primary};
`;

export const Source = styled.source`
  width: 100%;
  height: 20%;

  z-index: -1;

  position: absolute;

  @media screen and (max-width: 425px) {
    height: 5%;
  }
`;

export const Flag = styled.img`
  width: 100%;
  height: 25%;

  position: absolute;

  z-index: -1;

  @media screen and (min-width: 1669px) {
    height: 20%;
  }
`;

export const Logo = styled.img`
  max-width: 40%;
  cursor: pointer;

  @media screen and (max-width: 426px) {
    min-width: 40%;
  }

  @media screen and (min-width: 426px) and (max-width: 625px) {
    min-width: unset;
    width: unset;
    max-width: unset;
  }
`;

export const BrandName = styled.img`
  cursor: pointer;
  max-width: 40%;

  @media screen and (min-width: 426px) and (max-width: 625px) {
    display: none;
  }

  @media screen and (max-width: 625px) {
    width: 5rem;
    max-width: unset;
  }
`;

interface IIsOpen {
  open: boolean;
}

export const HamburguerMenu = styled.div<IIsOpen>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 35px;
  height: 30px;

  margin: 0;
  padding: 0;

  cursor: pointer;

  transition: all 0.5s ease-in-out;

  .line-1,
  .line-2,
  .line-3 {
    width: 100%;
    height: 4px;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
    transition: all 0.5s ease-in-out;
  }

  .line-1 {
    transform: ${({ open }: IIsOpen) =>
      open && "rotateZ(-405deg) translate(-8px, 6px)"};
  }

  .line-2 {
    opacity: ${({ open }: IIsOpen) => open && 0};
  }

  .line-3 {
    transform: ${({ open }: IIsOpen) =>
      open && "rotateZ(405deg) translate(-8px, -6px)"};
  }

  @media screen and (min-width: 426px) {
    display: none;
  }
`;

export const HamburguerLine = styled.div`
  width: 100%;
  height: 4px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 0.5s ease-in-out;

  @media screen and (min-width: 426px) {
    display: none;
  }
`;

export const BtnBurguer = styled.div`
  width: 50px;
  height: 6px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 5px;

  @media screen and (min-width: 426px) {
    display: none;

    padding: 10% 10% 10% 0;
  }
`;

export const Paragraph = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  font-size: 20px;

  gap: 1rem;

  p {
    cursor: pointer;
    display: inline-block;
    position: relative;
    color: ${(props) => props.theme.colors.primary};
  }

  p {
    text-align: center;
    padding: 0 1rem;
  }

  @media screen and (max-width: 500px) {
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;

    padding-top: 1rem;

    gap: 1rem;
  }

  @media screen and (min-width: 501px) and (max-width: 624px) {
    align-items: flex-end;
    flex-direction: column;

    gap: 1rem;
    padding-top: 1rem;
  }
`;

interface IIsScrolled {
  scrolling: boolean;
}

export const CartBackground = styled.button<IIsScrolled>`
  display: flex;
  align-items: center;

  position: relative;

  z-index: 1;

  font-size: 16px;
  font-family: "Petrona", serif;

  cursor: pointer;

  color: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.cartBackground};

  padding: 0.7rem;

  border-radius: 20px;

  position: ${({ scrolling }: IIsScrolled) => scrolling && "fixed"};
  top: ${({ scrolling }: IIsScrolled) => scrolling && "5px"};
  right: ${({ scrolling }: IIsScrolled) => scrolling && "5px"};

  span {
    position: absolute;

    width: 24px;
    height: 24px;

    font-weight: bold;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;

    top: 5px;
    right: 3px;
    background-color: ${(props) => props.theme.colors.cartBackground};

    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.colors.lightBorder};
  }
`;
