import React from 'react';
import styled, { css } from 'styled-components';

const Shadow = styled.div`
  position: relative;
  width: 400px;
  border: 1px solid black;
  ${props =>
    props.showStart
      ? css`
          ::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            width: 10px;
            background: linear-gradient(
              to left,
              rgba(255, 255, 255, 0),
              rgba(0, 0, 0, 0.25)
            );
          }
        `
      : ''}
  ${props =>
    props.showEnd
      ? css`
          ::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            width: 10px;
            background: linear-gradient(
              to right,
              rgba(255, 255, 255, 0),
              rgba(0, 0, 0, 0.25)
            );
          }
        `
      : ''}
`;

const Container = styled.div`
  display: flex;
  overflow: auto;
`;

const Content = styled.div`
  padding: 20px 10px;
`;

const HorizontalJSScrollShadow = () => {
  const [showStart, setShowStart] = React.useState(false);
  const [showEnd, setShowEnd] = React.useState(false);
  const ref = React.useRef();

  React.useEffect(() => {
    const onScroll = () => {
      const { scrollWidth = 0, scrollLeft = 0, offsetWidth = 0 } =
        ref.current || {};
      setShowStart(scrollLeft > 0);
      setShowEnd(scrollLeft + offsetWidth < scrollWidth);
    };
    onScroll();
    const node = ref.current;
    node.addEventListener('scroll', onScroll);
    return () => {
      node.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <Shadow showEnd={showEnd} showStart={showStart}>
      <Container ref={ref}>
        {Array.from(Array(20)).map((i, idx) => (
          <Content key={idx}>{idx}</Content>
        ))}
      </Container>
    </Shadow>
  );
};

export default HorizontalJSScrollShadow;
