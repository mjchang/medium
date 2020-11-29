import React from 'react';
import styled, { css } from 'styled-components';

const Shadow = styled.div`
  position: relative;
  border: 1px solid black;
  ${props =>
    props.showStart
      ? css`
          ::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 10px;
            background: linear-gradient(
              to top,
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
            bottom: 0;
            left: 0;
            right: 0;
            height: 10px;
            background: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0),
              rgba(0, 0, 0, 0.25)
            );
          }
        `
      : ''}
`;

const Container = styled.div`
  height: 200px;
  overflow: auto;
`;

const Content = styled.div`
  padding: 10px 20px;
`;

const VerticalJSScrollShadow = () => {
  const [showStart, setShowStart] = React.useState(false);
  const [showEnd, setShowEnd] = React.useState(false);
  const ref = React.useRef();

  React.useEffect(() => {
    const onScroll = () => {
      const { scrollHeight = 0, scrollTop = 0, offsetHeight = 0 } =
        ref.current || {};
      setShowStart(scrollTop > 0);
      setShowEnd(scrollTop + offsetHeight < scrollHeight);
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

export default VerticalJSScrollShadow;
