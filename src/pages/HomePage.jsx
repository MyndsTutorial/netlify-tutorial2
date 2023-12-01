import React from "react";
import {
  Button,
  Container,
  ImageEstilizada,
  Subtitle,
  Title,
} from "../styled/ImageHomePage";
import luffy from "../assets/images/luffy.jpg";
const HomePage = () => {
  return (
    <Container>
      <div>
        <ImageEstilizada src={luffy} />
        <Title>Bem vindos ao super site</Title>
        <Subtitle>A mynds é uma super escola</Subtitle>
        <Button>Eu amo tomates</Button>
      </div>
    </Container>
  );
};

export default HomePage;
