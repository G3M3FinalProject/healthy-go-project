import styled from "styled-components";

export const Figure = styled.figure`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  position: relative;

  height: 100%;
`;

export const FloatContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;

  position: absolute;
  gap: 10rem;
  right: 10rem;
  top: 7rem;

  @media screen and (min-width: 1024px) and (max-width: 1089px) {
    right: 6rem;
    top: 9rem;
    gap: 8rem;
  }

  @media screen and (min-width: 1090px) and (max-width: 1200px) {
    right: 7rem;
    top: 8rem;
    gap: 7rem;
  }

  @media screen and (min-width: 1201px) and (max-width: 1350px) {
    right: 8rem;
    top: 8rem;
    gap: 8rem;
  }

  @keyframes fadeInFromTop {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @keyframes floating {
    0% {
      transform: translate(0%, 0%);
    }
    50% {
      transform: translateY(5%);
    }
  }
`;

export const Person = styled.img`
  z-index: -1;
`;

export const HeartFloat = styled.img`
  position: relative;

  z-index: 1;

  animation: fadeInFromTop 0.5s linear forwards, floating ease 3s infinite;
`;

export const ReviewFloat = styled.img`
  position: relative;

  z-index: 1;

  animation: fadeInFromTop 0.5s linear forwards, floating ease 3s infinite;
`;
