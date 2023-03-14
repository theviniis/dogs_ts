import React from 'react';
import * as S from './Input.styles';

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: string;
  type?: string;
  name?: string;
  hasError?: boolean;
  supportingText?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
}

export const Input: React.FC<InputProps> = ({
  label,
  id,
  name = 'input',
  type = 'text',
  supportingText,
  hasError = false,
  required = false,
  value,
  onChange,
  onBlur,
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
        hasError={hasError}
        required={required}
        supportingText={supportingText}
        aria-describedby={supportingTextId}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
      {supportingText && (
        <S.SupportingText id={supportingTextId} hasError={hasError}>
          {supportingText}
        </S.SupportingText>
      )}
    </S.Wrapper>
  );
};
