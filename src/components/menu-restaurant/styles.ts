import styled from "styled-components";

export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5rem;

  padding: 0.5rem 0rem 0 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  border-left: 1px solid var(--brand-light-green);
  border-right: 1px solid var(--brand-light-green);
  border-bottom: 1px solid var(--brand-light-green);
  border-radius: 0 0 25px 25px;
`;

export const ContainerDivMenu = styled.div`
  width: 100%;
  height: 100%;

  margin-left: auto;
  margin-right: auto;

  ul {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;

    gap: 3rem;

    padding: 1%;

    width: 100%;

    h2 {
      width: 100%;
      margin-top: 2%;
      margin-left: 2rem;
      font-family: "Petrona";
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 36px;
      text-transform: capitalize;
      color: #000000;
    }

    li {
      display: flex;
      flex-direction: column;
      gap: 3%;

      width: 17.3rem;
      height: 10rem;

      padding: 0.5%;

      border: 1px solid var(--brand-light-green);
      border-radius: 25px;

      @media screen and (max-width: 425px) {
        width: 100%;
        height: 30%;
        align-items: center;
        flex-direction: row;
      }

      @media screen and (max-width: 765px) {
        width: 100%;
        height: 30%;
        align-items: center;
        flex-direction: row;
      }
      div {
        width: 100%;
        display: flex;
        align-items: flex-start;

        flex-wrap: wrap;
        gap: 3%;

        @media screen and (max-width: 425px) {
          width: 100%;
        }

        img {
          width: 6rem;
          height: 7rem;
          padding: 1%;
          border-radius: 25px;

          @media screen and (max-width: 425px) {
            width: 40%;
            height: 50%;
          }
        }
      }
      button {
        width: 65.12%;
        height: 1.25rem;
        padding: 1%;
        margin-left: auto;
        margin-right: auto;
        background: #12753a;
        border-radius: 16px;
        font-family: "Petrona";
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        text-align: center;
        color: #ffffff;

        @media screen and (max-width: 425px) {
          width: 30%;
          margin-right: 3%;
          font-size: 8px;
        }
      }
    }
  }
`;

export const ContainerSection = styled.section`
  display: flex;
  align-items: center;
  align-items: flex-start;
  flex-direction: column;

  width: 57%;
  height: 3rem;

  margin-top: 3%;

  h4 {
    margin-left: 0%;
    font-family: "Petrona";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    @media screen and (max-width: 425px) {
      font-size: 14px;
    }
  }
`;

export const ContainerP = styled.p`
  font-family: "Petrona";
  font-style: normal;
  font-weight: 600;
  font-size: 10px;

  @media screen and (max-width: 425px) {
    font-size: 10px;
    display: none;
  }
`;

export const ContainerPreco = styled.p`
  font-family: "Petrona";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;

  margin-left: 6.5rem;
  margin-top: -2rem;

  @media screen and (max-width: 425px) {
    margin-top: 1%;
    font-size: 10px;
  }
`;
