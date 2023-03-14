import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 0.4rem;
  background-color: #fb1;
  color: #764701;
  padding-inline: 1.2rem;
  transition: 0.1s;
  min-width: 8rem;
  height: 2.675rem;

  &:hover,
  &:focus {
    box-shadow: 0 0 0 3px #fea, 0 0 0 #fb1;
  }

  &:disabled {
    cursor: wait;
    opacity: 0.5;
  }
`;
