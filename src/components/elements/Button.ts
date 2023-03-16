import styled, { css, DefaultTheme } from 'styled-components';
import { getTypographyStyles } from '../Typography';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
  skin?: 'primary' | 'secondary' | 'success' | 'error';
  variant?: 'default' | 'stroke' | 'ghost';
  disabled?: boolean;
  icon?: JSX.Element;
  iconPosition?: 'start' | 'end';
}

export interface SetVariantProps
  extends Omit<ButtonProps, 'icon' | 'iconPosition' | 'children'> {
  theme: DefaultTheme;
}

export const Button = styled.button<Omit<ButtonProps, 'icon' | 'children'>>`
  background: none;
  -webkit-appearance: none;
  font: inherit;
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs}px;
  align-items: center;
  flex-direction: ${({ iconPosition }) =>
    iconPosition === 'start' ? 'row' : 'row-reverse'};
  padding-inline: ${({ theme }) => theme.spacing.xs}rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border-radius: ${({ theme }) => theme.border.radius.xs}px;
  border-style: solid;
  border-width: ${({ theme }) => theme.border.width.xs}px;
  transition: ease-in-out 150ms;
  height: ${({ theme }) => theme.spacing.lg}rem;
  ${getTypographyStyles('subtitle2')}
  ${({ theme, skin, variant, disabled }) =>
    setVariant({ theme, skin, variant, disabled })}
`;

function setVariant({
  theme,
  skin = 'primary',
  variant = 'default',
}: SetVariantProps) {
  const { colors } = theme;
  const colorDefault = 'DEFAULT';
  const colorHover = 400;
  const colorFocus = 500;
  const variantOptions = {
    default: {
      color: colors.neutral.white,
      background: colors[skin][colorDefault],
      border: colors[skin][colorDefault],
      hover: {
        color: colors.neutral.white,
        background: colors[skin][colorHover],
        border: colors[skin][colorHover],
      },
      focus: {
        color: colors.neutral.white,
        background: colors[skin][colorFocus],
        border: colors[skin][colorFocus],
      },
    },
    stroke: {
      color: colors[skin][colorDefault],
      background: 'transparent',
      border: colors[skin][colorDefault],
      hover: {
        color: colors[skin][colorDefault],
        background: colors[skin][colorHover],
        border: colors[skin][colorDefault],
      },
      focus: {
        color: colors.neutral.white,
        background: colors[skin][colorFocus],
        border: colors[skin][colorFocus],
      },
    },
    ghost: {
      color: colors[skin][colorDefault],
      background: 'transparent',
      border: 'transparent',
      hover: {
        color: colors[skin][colorHover],
        background: 'transparent',
        border: 'transparent',
      },
      focus: {
        color: colors[skin][colorFocus],
        background: 'transparent',
        border: 'transparent',
      },
    },
  };

  return css`
    color: ${variantOptions[variant].color};
    background-color: ${variantOptions[variant].background};
    border-color: ${variantOptions[variant].border};
    &:hover {
      color: ${variantOptions[variant].hover.color};
      background-color: ${variantOptions[variant].hover.background};
      border-color: ${variantOptions[variant].hover.border};
    }
    /* &:focus, */
    &:active {
      color: ${variantOptions[variant].focus.color};
      background-color: ${variantOptions[variant].focus.background};
      border-color: ${variantOptions[variant].focus.border};
    }

    &:disabled {
      background-color: ${colors.neutral[200]};
      border-color: ${colors.neutral[200]};
      color: ${colors.neutral[900]};
    }
  `;
}
