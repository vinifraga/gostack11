import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signUpBackground from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

const animation = keyframes`
  from{
    transform: translateX(50px);
    opacity: 0;
  }
  to {
    transform: translateX(0px)
    opacity: 1;
  }
`;

export const AnimationContainer = styled.div`
  animation: 1s ${animation};
  display: flex;
  place-content: center;
  flex-direction: column;
  align-items: center;

  max-width: 700px;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  place-content: center;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0px 30px;
    width: 340px;
    text-align: center;
  }

  h1 {
    margin-bottom: 24px;
  }

  > a {
    text-decoration: none;
    color: #ff9000;
    display: flex;
    align-items: center;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackground}) no-repeat center;
  background-size: cover;
`;
