import React from 'react';
import * as S from './Input.styles';
import { SkinsProps } from '../../shared';

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: string;
  type?: string;
  name?: string;
  skin?: SkinsProps;
  supportingText?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
}

export const Input: React.FC<InputProps> = ({
  label,
  id,
  skin,
  name = 'input',
  type = 'text',
  supportingText,
  required = false,
  value,
  onChange,
  onBlur,
  disabled = false,
  ...props
}) => {
  const inputName = `${name}-${crypto.randomUUID()}`;
  const supportingTextId = inputName + '-supporting-text';
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input
        id={id ?? inputName}
        name={name ?? inputName}
        type={type}
        value={value}
        required={required}
        supportingText={supportingText}
        aria-describedby={supportingTextId}
        onChange={onChange}
        onBlur={onBlur}
        skin={skin}
        disabled={disabled}
        {...props}
      />
      {supportingText && (
        <S.SupportingText id={supportingTextId} skin={skin}>
          {supportingText}
        </S.SupportingText>
      )}
    </S.Wrapper>
  );
};
