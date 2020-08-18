import { createGlobalStyle, keyframes} from 'styled-components';

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
  }
`

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: grid;
    min-height: 100vh;
    background-size: 400% 400%;
    animation: ${gradient} 25s ease infinite;
    overflow-x: hidden;
  }`