import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    display: inline-block;
    background-color: var(--button-green);
    width: 0px;
    height: 0px;
    border-radius: 50%;
    margin: 0 8px;
    animation: bounce 0.6s infinite alternate;
  }

  span:nth-child(2) {
    background-color: var(--brand-light-green);
    animation-delay: 0.2s;
  }

  span:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes bounce {
    to {
      width: 16px;
      height: 16px;
      transform: translate3d(0, -16px, 0);
    }
  }
`;
