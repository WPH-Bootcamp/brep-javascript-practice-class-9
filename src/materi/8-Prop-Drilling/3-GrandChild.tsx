import { type NameProps } from './types/name.type';

function GrandChild({ name }: NameProps) {
  return <p>Saya adalah {name}</p>;
}

export default GrandChild;
