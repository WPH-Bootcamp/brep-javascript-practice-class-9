import { type NameProps } from './types/name.type';
import GrandChild from './3-GrandChild';

function Child({ name }: NameProps) {
  return <GrandChild name={name} />;
}

export default Child;
