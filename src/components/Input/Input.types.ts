type InputStringProps = Partial<
  Record<
    'label' | 'value' | 'type' | 'name' | 'supportingText' | 'errorMessage',
    string
  >
>;

type InputBooProps = Partial<Record<'required' | 'disabled', boolean>>;

type InputIconsProps = Partial<Record<'startIcon' | 'endIcon', JSX.Element>>;

export interface InputProps
  extends React.HTMLAttributes<HTMLInputElement>,
    InputStringProps,
    InputBooProps,
    InputIconsProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
}
