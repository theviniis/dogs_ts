import { useState } from 'react';

const types = {
  email: {
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: 'Preencha um email válido.',
  },
  password: {
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: 'Preencha uma senha válida.',
  },
};

export const useForm = (type: keyof typeof types) => {
  const [value, setValue] = useState('');
  const [hasError, setHasError] = useState<boolean>(false);
  const [supportingText, setSupportingText] = useState<string | undefined>(
    undefined
  );

  function validate(value: string) {
    if (value.length === 0) {
      setHasError(true);
      setSupportingText('Preencha um valor');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setHasError(true);
      setSupportingText(types[type].message);
      return false;
    } else {
      setHasError(false);
      setSupportingText(undefined);
      return true;
    }
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    if (hasError) validate(e.target.value);
  }

  return {
    value,
    onChange,
    supportingText,
    hasError,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};
