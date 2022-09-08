import styled from "styled-components";

export const CenteringContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
  height: 100%;

  margin: 10rem 0 0 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (min-width: 1921px) and (max-width: 3000px) {
    margin: 20rem 0 0 0;
  }
`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  width: 30%;
  height: 100%;

  gap: 3rem;

  text-align: center;

  > p {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    color: ${(props) => props.theme.colors.contrastTextBlack};
  }

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const Form = styled.form.attrs({
  id: "formLogin",
})`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  gap: 1rem;

  p {
    color: ${(props) => props.theme.colors.contrastTextBlack};
  }

  p:nth-child(4) {
    cursor: pointer;
    display: inline-block;
    position: relative;
    color: ${(props) => props.theme.colors.contrastTextBlack};
  }

  p:nth-child(4)::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 2px;

    background-color: ${(props) => props.theme.colors.contrastTextBlack};

    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  p:nth-child(4):hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  p:nth-child(4) {
    cursor: pointer;
    font-size: 18px;
  }

  p + p {
    font-size: 20px;
    font-weight: 700;
    font-style: normal;
    line-height: 36px;
  }
`;

export const Img = styled.img`
  display: block;

  @media screen and (max-width: 768px) {
    width: 45%;
  }

  @media screen and (max-width: 426px) {
    display: none;
  }

  @media screen and (min-width: 776px) and (max-width: 920px) {
    width: 55%;
  }

  @media screen and (min-width: 921px) {
    width: unset;
  }
`;

export const ShowPassword = styled.div`
  width: 100%;
  position: relative;

  button {
    position: absolute;

    top: 0.8rem;
    right: 1rem;

    background: trasparent;
  }
`;
