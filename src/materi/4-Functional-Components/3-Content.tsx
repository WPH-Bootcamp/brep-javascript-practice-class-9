const Card = ({ title, price }: { title: string; price: number }) => {
  return (
    <div
      style={{ backgroundColor: 'red', color: 'white', textAlign: 'center' }}
    >
      <h1>{title}</h1>
      <p>{price}</p>
    </div>
  );
};

export default function Content() {
  return (
    <main>
      <Card title="Komputer" price={20_000_000} />
      <Card title="Laptop" price={20_000_000} />
      <Card title="Handphone" price={25_000_000} />
    </main>
  );
}
