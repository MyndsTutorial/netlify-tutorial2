import React, {useState, useEffect} from "react";
import {
  Container,
  RandomColorButton,
  Subtitle,
  Title,
} from "../styled/FunnyPageStyled";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
const FunnyPage = () => {
  const [titleColor, setTitleColor] = useState(getRandomColor());
  const [subtitleColor, setSubtitleColor] = useState(getRandomColor());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitleColor(getRandomColor());
      setSubtitleColor(getRandomColor());
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleRandomColorClick = () => {
    setTitleColor(getRandomColor());
    setSubtitleColor(getRandomColor());
  };

  return (
    <Container>
      <div>
        <Title style={{color: titleColor}}>Página muito engraçada!</Title>
        <Subtitle style={{color: subtitleColor}}>
          Aprendendo a passar propriedades pro styled-components
        </Subtitle>
        <RandomColorButton onClick={handleRandomColorClick}>
          Trocar a cor
        </RandomColorButton>
      </div>
    </Container>
  );
};

export default FunnyPage;
