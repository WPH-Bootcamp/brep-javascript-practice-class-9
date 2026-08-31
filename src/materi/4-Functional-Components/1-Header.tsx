import { useState, type ChangeEvent } from 'react';

function Header() {
  const [name, setName] = useState<string>('');

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ width: '50px' }}>
        <h1>Logo</h1>
        <input type="text" onChange={handleInput} value={name} />
      </div>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
        <li>Home</li>
        <li>About</li>
        <li>Address</li>
        <li>Contact Us</li>
        <li>Halo, {name}</li>
      </ul>
    </header>
  );
}

export default Header;
