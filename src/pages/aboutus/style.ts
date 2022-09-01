import styled from "styled-components";

export const Containerdash = styled.main`
  width: 100vw;

  @media (max-width: 440px) {
    margin-top: 0;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5%;
    margin-top: 5%;
    padding: 2%;

    section {
      width: 40rem;
      height: 20rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    img {
      width: 30vw;
      height: 50vh;
    }
    @media (max-width: 440px) {
      flex-direction: column;
      section {
        width: 15rem;
        height: 50%;
        margin-top: 0%;
        margin-bottom: 2%;
      }
    }
  }
`;

export const Img = styled.img`
  width: 30vw;
  height: 30vh;
  position: absolute;
  margin-top: -8rem;

  @media (max-width: 440px) {
    margin-top: -2rem;
  }
`;
