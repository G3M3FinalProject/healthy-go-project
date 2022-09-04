import styled from "styled-components";

export const Positioning = styled.div`
  width: 100%;
  height: 13rem;
  position: sticky;

  display: flex;
  align-items: center;
  justify-content: center;
  align-content: flex-start;

  @media screen and (max-width: 501px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Paragraph = styled.div`
  text-align: center;

  margin: 0 0 1rem 0;
  padding: 0.5rem 0 0 0;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #fff;
  }

  @media screen and (max-width: 720px) {
    p {
      font-size: unset;
    }
  }
`;

export const Image = styled.img`
  @media screen and (max-width: 570px) {
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

  @media screen and (max-width: 720px) {
    p {
      font-size: 14px;
    }
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

    position: relative;

    gap: 0.9rem;
    left: 0.6rem;
    bottom: 0.1rem;

    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;

    margin: unset;
  }

  @media screen and (min-width: 502px) and (max-width: 535px) {
    img {
      width: 1.5rem;
    }
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

  position: absolute;

  z-index: -1;
`;
