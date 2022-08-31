import styled from "styled-components";

export const ContainerUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1%;
  width: 76.81rem;
  margin-left: auto;
  margin-right: auto;
  border-left: 1px solid;
  border-right: 1px solid;
  border-bottom: 1px solid;
  border-color: var(--brand-light-green);

  @media screen and (max-width: 425px) {
    width: 80%;
  }

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
    width: 23.37rem;
    height: 13.68rem;
    padding: 2%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--brand-light-green);
    border-radius: 25px;

    @media screen and (max-width: 425px) {
      width: 100%;
      height: 30%;
      align-items: center;
      flex-direction: row;
    }

    div {
      width: 100%;
      display: flex;
      align-items: flex-start;
      gap: 3%;

      @media screen and (max-width: 425px) {
        width: 100%;
      }

      img {
        width: 8.75rem;
        height: 9.06rem;
        padding: 1%;
        border-radius: 25px;

        @media screen and (max-width: 425px) {
          width: 40%;
          height: 50%;
        }
      }
    }
  }
  button {
    width: 15.12rem;
    height: 2.25rem;
    padding: 1%;
    margin-top: 2%;
    margin-left: auto;
    margin-right: auto;
    background: #12753a;
    border-radius: 16px;
    font-family: "Petrona";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    color: #ffffff;

    @media screen and (max-width: 425px) {
      width: 30%;
      margin-right: 3%;
    }
  }
`;

export const ContainerSection = styled.section`
  display: flex;
  align-items: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 4rem;
  margin-top: 2%;

  h4 {
    margin-left: 0%;
    font-family: "Petrona";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;

    @media screen and (max-width: 425px) {
      font-size: 14px;
    }
  }
`;

export const ContainerP = styled.p`
  font-family: "Petrona";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  margin-bottom: 3.5rem;

  @media screen and (max-width: 425px) {
    font-size: 10px;
  }
`;

export const ContainerPreco = styled.p`
  font-family: "Petrona";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;

  @media screen and (max-width: 425px) {
    font-size: 10px;
  }
`;
