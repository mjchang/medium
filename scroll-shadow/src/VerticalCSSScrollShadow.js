import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 200px;
  overflow: auto;
  border: 1px solid black;
  background-image: linear-gradient(to top, white, white),
    linear-gradient(to top, white, white),
    linear-gradient(to top, rgba(0, 0, 0, 0.25), rgba(255, 255, 255, 0)),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(255, 255, 255, 0));
  background-position: bottom center, top center, bottom center, top center;
  background-color: white;
  background-repeat: no-repeat;
  background-size: 100% 20px, 100% 20px, 100% 10px, 100% 10px;
  background-attachment: local, local, scroll, scroll;
`;

const Content = styled.div`
  padding: 10px 20px;
`;

const VerticalCSSScrollShadow = () => {
  return (
    <Container>
      {Array.from(Array(20)).map((i, idx) => (
        <Content key={idx}>{idx}</Content>
      ))}
    </Container>
  );
};

export default VerticalCSSScrollShadow;
