import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 400px;
  overflow: auto;
  border: 1px solid black;
  background-image: linear-gradient(to right, white, white),
    linear-gradient(to right, white, white),
    linear-gradient(to right, rgba(0, 0, 0, 0.25), rgba(255, 255, 255, 0)),
    linear-gradient(to left, rgba(0, 0, 0, 0.25), rgba(255, 255, 255, 0));
  background-position: left center, right center, left center, right center;
  background-repeat: no-repeat;
  background-color: white;
  background-size: 20px 100%, 20px 100%, 10px 100%, 10px 100%;
  background-attachment: local, local, scroll, scroll;
`;

const Content = styled.div`
  padding: 20px 10px;
`;

const HorizontalCSSScrollShadow = () => (
  <Container>
    {Array.from(Array(20)).map((i, idx) => (
      <Content key={idx}>{idx}</Content>
    ))}
  </Container>
);

export default HorizontalCSSScrollShadow;
