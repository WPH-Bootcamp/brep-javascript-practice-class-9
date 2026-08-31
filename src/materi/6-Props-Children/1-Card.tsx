import { type CardProps } from './types/card.type';

function Card({ children }: CardProps) {
  return (
    <div
      style={{
        backgroundColor: 'red',
        fontFamily: 'arial',
        fontSize: '28px',
        textAlign: 'center',
      }}
    >
      {children}
    </div>
  );
}

export default Card;
