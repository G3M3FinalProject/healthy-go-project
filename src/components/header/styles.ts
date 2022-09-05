import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0.5rem 0rem 0 0;
  width: 100%;
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;

  color: white;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;

  font-size: 18px;

  padding: 0 10% 0 0;
  margin: 0;

  gap: 3rem;

  color: white;
`;

export const Source = styled.source`
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 20%;

  @media screen and (max-width: 425px) {
    height: 5%;
  }
`;

export const Flag = styled.img`
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 25%;
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

  @media screen and (max-width: 426px) {
    min-width: 40%;
  }

  @media screen and (max-width: 625px) {
    width: 7rem;
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

  padding: 0;
  margin: 0;

  cursor: pointer;

  transition: all 0.5s ease-in-out;

  .line-1,
  .line-2,
  .line-3 {
    width: 100%;
    height: 4px;
    background: #fff;
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
  background: #fff;
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
  background: #fff;
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

  & > p {
    cursor: pointer;
    display: inline-block;
    position: relative;
    color: white;
  }

  & > p::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: white;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  & > p:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  & > p {
    text-align: center;
    padding: 0 1rem;
  }

  @media screen and (max-width: 500px) {
    padding-top: 1rem;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-end;
    gap: 1rem;
  }

  @media screen and (min-width: 501px) and (max-width: 624px) {
    padding-top: 1rem;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-end;
  }
`;

export const CartBackground = styled.button`
  display: flex;
  align-items: center;
  position: relative;

  cursor: pointer;

  background: #54a656;

  color: white;

  padding: 0.7rem;

  border-radius: 20px;
`;
