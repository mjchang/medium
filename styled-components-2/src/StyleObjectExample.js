import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const PrimaryButton = styled(Button)`
  ${props => props.$style ?? {}}
`;

const StyleObjectExample = () => {
  return (
    <div>
      <h2>Style Object</h2>
      <p>Mix style objects with Styled Components.</p>
      <PrimaryButton
        $style={{ backgroundColor: '#007bff' }}
        onClick={() => alert('clicked!')}
        type="button"
      >
        Primary
      </PrimaryButton>
    </div>
  );
};

export default StyleObjectExample;
