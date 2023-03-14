import styled from 'styled-components';
import { InputProps } from './';

export const Wrapper = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  line-height: 1;
  padding-block-end: 0.5rem;
`;

export const Input = styled.input<
  Pick<InputProps, 'hasError' | 'supportingText'>
>`
  border: 1px solid;
  border-color: ${({ hasError }) => (hasError ? '#f31' : '#eee')};
  width: 100%;
  padding-inline: 0.8rem;
  border-radius: 0.4rem;
  background-color: #eee;
  height: 2.675rem;
  transition: 200ms;

  &:focus,
  &:hover {
    outline: none;
    border-color: #fb1;
    background-color: #fff;
    box-shadow: 0 0 0 3px #fea;
  }
`;

export const SupportingText = styled.span<Pick<InputProps, 'hasError'>>`
  display: block;
  font-size: 0.875rem;
  color: ${({ hasError }) => (hasError ? '#f31' : '#333')};
  margin-block-start: 0.25rem;
`;
