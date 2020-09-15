import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  padding: 6px 12px;
  font-size: 16px;
  font-family: Arial, sans-serif;
  line-height: 1.5;
  color: white;
  background-color: #6c757d;
  border: none;
  border-radius: 4px;

  :not(:disabled) {
    cursor: pointer;
  }

  :hover {
    background-color: #5a6268;
  }
`;

export default Button;
