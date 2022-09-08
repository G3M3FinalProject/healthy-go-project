import styled from "styled-components";

export const ContainerMenu = styled.div`
  padding-left: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 55px;
  width: 98%;
`;

export const ContainerDivMenu = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;

  padding: 1%;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;

  border: 1px solid ${(props) => props.theme.colors.lightBorder};
  border-radius: 15px;
  border-top: none;

  h2 {
    font-size: 35px;
    color: ${(props) => props.theme.colors.contrastTextBlack};
  }
  @media screen and (min-width: 768px) {
    margin: 0 2rem 0 2rem;

    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (min-width: 1024px) {
    ul {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (min-width: 1440px) {
    ul {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export const ContainerProduct = styled.li`
  display: grid;
  grid-template-areas: "img title title" "img types types" "img price btn";
  border-right: 1px solid var(--brand-light-green);
  border-bottom: 1px solid var(--brand-light-green);
  border-radius: 10px;
  height: 140px;
  width: 100%;
        }

        img {
          object-fit: cover;
          width: 8rem;
          height: 8rem;
          padding: 1%;
          border-radius: 25px;

          @media screen and (max-width: 425px) {
            width: 40%;
            height: 50%;
          }
          @media screen and (max-width: 1369px) {
            width: 7rem;
          }
        }
      }
      button {
        width: 50px;
        height: 3.25rem;
        padding: 1%;
        margin-right: 20px;

        background: rgba(36, 133, 64, 5);
        border-radius: 15px;

        img {
          width: 30px;
        }

        @media screen and (max-width: 425px) {
          width: 30%;
          margin-right: 3%;
          font-size: 8px;
        }
      }
    }
  }
`;

export const ContainerCategory = styled.p`
  grid-area: types;
  font-family: "Petrona";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  margin-bottom: 1%;
`;
