import styled from "styled-components";

export const Positioning = styled.div`
  width: 100%;
  height: 13rem;
  bottom: 0;
  position: fixed;

  @media screen and (max-width: 501px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Paragraph = styled.div`
  padding: 0.5rem 0 0 0;

  text-align: center;

  margin: 0 0 1rem 0;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #fff;
  }

  @media screen and (max-width: 501px) {
    p {
      font-size: unset;
    }
  }
`;

export const Image = styled.img`
  @media screen and (max-width: 501px) {
    width: 4rem;
  }
`;

export const FramePosition = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1.5rem;

  @media screen and (max-width: 501px) {
    flex-wrap: wrap;
  }

  p {
    text-align: center;
  }
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-weight: 600;
    color: #fff;
    font-size: 18px;
    margin: 0.6rem 0 0 0;
  }

  @media screen and (max-width: 501px) {
    p {
      display: none;
    }
  }

  @media screen and (max-width: 501px) {
    width: 28%;
    flex-direction: row;
  }
`;

export const Icons = styled.div`
  display: flex;

  gap: 1rem;
  margin: 0.6rem 0 0 0.6rem;

  align-items: center;

  @media screen and (max-width: 501px) {
    img {
      height: 20px;
      width: 20px;
    }

    gap: 0.9rem;
    position: relative;
    left: 0.6rem;
    bottom: 0.1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;

    margin: unset;
  }
`;

export const Portrait = styled.div`
  height: 5rem;

  @media screen and (max-width: 501px) {
    height: fit-content;
    width: fit-content;
  }
`;

export const FooterFlag = styled.img`
  width: 100%;
  height: 13rem;
  bottom: 0;
  position: fixed;
  z-index: -1;
`;
