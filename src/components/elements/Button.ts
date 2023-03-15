import styled, { css, DefaultTheme } from 'styled-components';
import { SkinsProps } from '../../shared';
import { getTypographyStyles } from '../Typography';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
  skin?: SkinsProps;
  variant?: 'default' | 'stroke' | 'ghost';
  disabled?: boolean;
}

export interface SetVariantProps
  extends Omit<ButtonProps, 'icon' | 'iconPosition' | 'children'> {
  theme: DefaultTheme;
}

export const Button = styled.button<Omit<ButtonProps, 'icon' | 'children'>>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs}rem;
  align-items: center;
  flex-direction: row;
  padding-inline: ${({ theme }) => theme.spacing.xs}rem;
  height: ${({ theme }) => theme.spacing.lg}rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background: none;
  border: none;
  outline: none;
  border-radius: ${({ theme }) => theme.border.radius.xs}px;
  transition: ease-in-out 150ms;
  :disabled {
    background-color: ${({ theme }) => theme.colors.neutral[200]};
    border-color: ${({ theme }) => theme.colors.neutral[200]};
    color: ${({ theme }) => theme.colors.neutral[900]};
  }
  ${getTypographyStyles('subtitle2')};
  ${({ theme, skin, variant }) => setVariant({ theme, skin, variant })};
`;

function setVariant({
  theme,
  skin = 'neutral',
  variant = 'default',
}: SetVariantProps) {
  const { colors, scheme } = theme;
  let color: string;
  let colorHover: keyof typeof colors.neutral;
  let colorFocus: keyof typeof colors.neutral;
  switch (scheme) {
    case 'light':
      color = colors.background;
      colorHover = 400;
      colorFocus = 600;
      break;
    default:
      color = colors.foreground;
      colorHover = 300;
      colorFocus = 200;
      break;
  }
  const variantOptions = {
    default: {
      color,
      background: colors[skin].DEFAULT,
      border: colors[skin].DEFAULT,
      hover: {
        color,
        background: colors[skin][colorHover],
        border: colors[skin][colorHover],
      },
      focus: {
        color,
        background: colors[skin][colorFocus],
        border: colors[skin][colorFocus],
      },
    },
    stroke: {
      color: colors[skin].DEFAULT,
      background: 'transparent',
      border: colors[skin].DEFAULT,
      hover: {
        color: colors[skin].DEFAULT,
        background: colors[skin][colorHover],
        border: colors[skin].DEFAULT,
      },
      focus: {
        color,
        background: colors[skin][colorFocus],
        border: colors[skin][colorFocus],
      },
    },
    ghost: {
      color: colors[skin].DEFAULT,
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
  } as const;
  console.log(skin);
  return css`
    color: ${variantOptions[variant].color};
    background-color: ${variantOptions[variant].background};
    border-color: ${variantOptions[variant].border};
    ${skin === 'neutral' && variant === 'ghost'
      ? ''
      : css`
          &:hover {
            color: ${variantOptions[variant].hover.color};
            background-color: ${variantOptions[variant].hover.background};
          }
          &:active {
            color: ${variantOptions[variant].focus.color};
            background-color: ${variantOptions[variant].focus.background};
            border-color: ${variantOptions[variant].focus.border};
          }
        `}
  `;
}
