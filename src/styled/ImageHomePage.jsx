import styled, {keyframes} from "styled-components";
export const ImageEstilizada = styled.img`
  width: 356px;
  height: 256px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1a1a1a;
  color: #fff;
  font-family: "Roboto", sans-serif;
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Title = styled.h1`
  font-size: 3em;
  animation: ${fadeIn} 1s ease-in-out;
`;

export const Subtitle = styled.p`
  font-size: 1.5em;
  animation: ${fadeIn} 1s ease-in-out;
  margin-top: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1.2em;
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

  animation: ${fadeIn} 1s ease-in-out;
`;
