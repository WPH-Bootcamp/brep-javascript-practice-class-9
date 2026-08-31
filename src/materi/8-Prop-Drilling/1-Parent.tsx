import { type NameProps } from './types/name.type';
import Child from './2-Child';

function Parent({ name }: NameProps) {
  return <Child name={name} />;
}

export default Parent;
