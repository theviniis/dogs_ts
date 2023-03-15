import { colors } from './theme';

export type SkinsProps = Exclude<
  keyof typeof colors,
  'gradients' | 'background' | 'foreground'
>;
