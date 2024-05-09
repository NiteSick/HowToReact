import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 24px;
  background-color: rebeccapurple;
`;

const Title = styled.p`
  margin: 0 auto;
  font-size: 24px;
  font-weight: 600;
  color: white;
  width: fit-content;
`;

const TitleBar = () => {
  return (
    <Container>
      <Title>How To React</Title>
    </Container>
  );
};

export default TitleBar;
