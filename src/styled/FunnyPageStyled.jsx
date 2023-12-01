import styled, {keyframes} from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Title = styled.h1`
  font-size: 3em;
  animation: ${fadeIn} 1s ease-in-out, ${rotate} 5s linear infinite;
`;

export const Subtitle = styled.p`
  font-size: 1.5em;
  animation: ${fadeIn} 1s ease-in-out;
`;

export const RandomColorButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #217dbb;
  }

  &:active {
    transform: scale(0.95);
  }
`;
