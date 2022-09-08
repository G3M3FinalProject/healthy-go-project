import styled from "styled-components";

export const CenteringContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: -135px 0 0 100px;

  height: 100%;

  gap: 3rem;

  text-align: center;

  p {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    color: ${(props) => props.theme.colors.contrastTextBlack};
  }

  @media screen and (max-width: 769px) and (max-width: 920px) {
    margin: auto;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 140%;
  height: 100%;

  gap: 1rem;

  p {
    color: ${(props) => props.theme.colors.contrastTextBlack};
  }

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

export const Input = styled.input`
  width: 32.125rem;
  height: 2.5rem;

  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));

  border-radius: 10px;
  border: 1px solid rgba(67, 66, 66, 1);

  background-color: #f7f6f3;
  color: black;

  padding: 0.7rem 0.813rem;

  font-size: 17px;

  outline: none;

  &::placeholder {
    color: var(--placeholder);
  }

  @media screen and (max-width: 426px) {
    width: 19rem;
  }

  @media screen and (min-width: 769px) and (max-width: 920px) {
    width: 20rem;
  }
`;

export const Button = styled.button`
  width: 26.125rem;
  height: fit-content;

  border-radius: 15px;

  font-weight: 700;

  color: white;
  background-color: var(--button-green);

  padding: 1rem 4.5%;

  @media screen and (max-width: 426px) {
    width: 19rem;
  }

  @media screen and (min-width: 769px) and (max-width: 920px) {
    width: 20rem;
  }
`;
export const Paragragh = styled.p`
  width: 80%;
  margin-top: -35px;
`;

export const Back = styled.p`
  margin-left: 40%;
  margin-top: 15px;
`;

export const ContainerCenter = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;

  margin: 7rem 0 0 0;

  @media screen and (max-width: 769px) and (max-width: 920px) {
    align-content: center;
    flex-direction: column;
    justify-content: center;
  }
`;

export const RightDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
  margin: auto;

  @media screen and (max-width: 769px) and (max-width: 920px) {
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin: 10% 0 0% 0%;
  }
`;

export const CardAdress = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: scroll;
  height: 500px;
  overflow-x: hidden;
  margin-bottom: 10px;
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 769px) and (max-width: 920px) {
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }
`;

export const ButtonSave = styled.button`
  width: 10.125rem;
  height: fit-content;
  margin-top: 12rem;
  border-radius: 15px;

  font-weight: 700;

  color: white;
  background-color: var(--button-green);

  padding: 1rem 4.5%;

  @media screen and (max-width: 426px) {
    width: 10.125rem;
  }

  @media screen and (min-width: 769px) and (max-width: 920px) {
    width: 10.125rem;
  }
`;
export const Card = styled.div`
  border-radius: 10px;
  background-color: rgba(202, 255, 215, 1);
  min-width: 20rem;
  border-left: 5px solid rgba(18, 117, 58, 1);
  text-align: left;
  margin-top: 10px;
`;

export const TitleCard = styled.h4`
  font-family: "Petrona", serif;
  margin: 0.75rem 1rem 1rem 0.75rem;
`;

export const InfoCard = styled.h4`
  font-family: "Petrona", serif;
  margin: 0 0 0 0.75rem;
  font-weight: lighter;
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -35px;
  width: 107%;
  height: fit-content;
`;

export const DivAdress = styled.div`
  display: flex;
  flex-direction: row;

  h3 {
    margin-left: 5px;
    color: ${(props) => props.theme.colors.contrastTextBlack};
  }

  svg {
    color: ${(props) => props.theme.colors.LocationGreen};
  }
`;
