import styled from "styled-components";

export const CenteringContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
  height: 100%;

  margin: 7rem 0 0 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;

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
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 140%;
  height: 100%;

  gap: 1rem;

  p:nth-child(4) {
    cursor: pointer;
    font-size: 18px;
  }

  p + p {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 36px;
  }
`;

export const Paragraph = styled.p`
  width: 80%;
  margin-top: -35px;
  color: ${(props) => props.theme.colors.lightGreen};
`;

export const EffectDiv = styled.div`
  text-align: center;

  & > p {
    cursor: pointer;
    display: inline-block;
    position: relative;
    color: ${(props) => props.theme.colors.contrastTextBlack};
  }

  & > p::after {
    content: "";
    position: absolute;

    width: 100%;
    height: 2px;

    left: 0;
    bottom: 0;

    background-color: ${(props) => props.theme.colors.contrastTextBlack};

    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  & > p:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export const Back = styled.p`
  font-size: 1.2rem;

  text-align: center;

  margin-top: 15px;

  cursor: pointer;
`;
