import styled, { css, DefaultTheme } from 'styled-components';
import { getTypographyStyles } from '../Typography';
import { InputProps } from '.';

export const Wrapper = styled.div`
  margin-block-end: ${({ theme }) => theme.spacing.xs}rem;
`;

export const Label = styled.label`
  ${({ theme }) => `
  margin-block-end: ${theme.spacing.xxxs}rem;
  ${getTypographyStyles('p1')};
`}
`;

export const Input = styled.input<Pick<InputProps, 'supportingText' | 'skin'>>`
  all: unset;
  box-sizing: border-box;
  border-style: solid;
  width: 100%;
  transition: ease-in-out 150ms;
  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
  }
  ${getTypographyStyles('p1')};
  ${({ theme }) => `
    height: ${theme.spacing.lg}rem;
    padding-inline: ${theme.spacing.xxs}rem;
    border-width: ${theme.border.width.xs}px;
    border-radius: ${theme.border.radius.xs}px;
    `};
  ${({ theme, skin }) => setVariant({ theme, skin })};
`;

export const SupportingText = styled.span<Pick<InputProps, 'skin'>>`
  display: block;
  margin-block-start: ${({ theme }) => theme.spacing.xxxs}rem;
  ${getTypographyStyles('p2')};
  color: ${({ skin, theme }) =>
    skin === 'error' ? theme.colors.error.DEFAULT : theme.colors.neutral[600]};
`;

export interface SetVariantProps extends Omit<InputProps, 'children'> {
  theme: DefaultTheme;
}

function setVariant({ theme, skin = 'primary' }: SetVariantProps) {
  const colorFocus = 300;
  const { colors } = theme;
  const variantOptions = {
    color: colors.foreground,
    background: colors.background,
    border: colors[skin].DEFAULT,
    hover: {
      color: colors.foreground,
      background: colors.background,
      border: colors[skin][colorFocus],
    },
    focus: {
      color: colors.foreground,
      background: colors.neutral[colorFocus],
      border: colors[skin][colorFocus],
    },
  };
  return css`
    color: ${variantOptions.color};
    background-color: ${variantOptions.background};
    border-color: ${variantOptions.border};
    &:hover {
      color: ${variantOptions.hover.color};
      background-color: ${variantOptions.hover.background};
      border-color: ${variantOptions.hover.border};
    }
    &:focus,
    &:active {
      color: ${variantOptions.focus.color};
      background-color: ${variantOptions.focus.background};
      border-color: ${variantOptions.focus.border};
    }
  `;
}
