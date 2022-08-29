import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0.5rem 0rem 0 0;
  width: 100%;

  z-index: 1;
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
  height: 20%;
`;

export const Logo = styled.img`
  max-width: 40%;

  @media screen and (max-width: 425px) {
    min-width: 40%;
  }
`;

export const BrandName = styled.img`
  max-width: 40%;

  @media screen and (max-width: 425px) {
    min-width: 40%;
  }
`;

export const HamburguerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 35px;
  height: 30px;

  cursor: pointer;

  position: relative;
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

  &:hover {
    .line-1 {
      transform: rotateZ(-405deg) translate(-8px, 6px);
    }

    .line-2 {
      opacity: 0;
    }

    .line-3 {
      transform: rotateZ(405deg) translate(-8px, -6px);
    }
  }
`;

export const HamburguerLine = styled.div`
  width: 100%;
  height: 4px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 0.5s ease-in-out;

  @media screen and (min-width: 425px) {
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

  gap: 2rem;

  @media screen and (max-width: 425px) {
    display: none;
  }
`;
