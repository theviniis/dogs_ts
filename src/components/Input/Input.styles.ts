import styled from 'styled-components';
import { getTypographyStyles } from '../Typography';
import { InputProps } from './Input.types';

const inputHeight = 'lg';
const inputPadding = 'xxs';

export const InputWrapper = styled.div`
  position: relative;
`;

export const Label = styled.label`
  ${({ theme }) => `
  margin-block-end: ${theme.spacing.xxxs}rem;
  ${getTypographyStyles('p1')};
`}
`;

export const Input = styled.input<Pick<InputProps, 'supportingText'>>`
  -webkit-appearance: none;
  -moz-appearance: none;
  border-style: solid;
  width: 100%;
  transition: ease-in-out 150ms;
  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
  }
  ${({ theme }) => `
    height: ${theme.spacing[inputHeight]}rem;
    padding-inline: ${theme.spacing[inputPadding]}rem;
    border-width: ${theme.border.width.xs}px;
    border-radius: ${theme.border.radius.xs}px;
  `};
`;

export const MessagesWrapper = styled.div``;

export const SupportingText = styled.span`
  display: block;
  margin-block-start: ${({ theme }) => theme.spacing.xxxs}rem;
  ${getTypographyStyles('p2')};
`;

export const IconsWrapper = styled.div`
  pointer-events: none;
  position: absolute;
  bottom: 0;
  z-index: 2;
  display: flex;
  left: 0;
  right: 0;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(0 0 0 / 0.1);
  height: ${({ theme }) => theme.spacing[inputHeight]}rem;
`;
