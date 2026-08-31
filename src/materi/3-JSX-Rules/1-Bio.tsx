import { Fragment, useState } from 'react';
import './bio.css';

function Bio() {
  const [umur, setUmur] = useState(20);
  const [isLogin, setIsLogin] = useState(false);
  const [isMessage, setIsMessage] = useState(true);
  const nama = 'Renday';

  if (umur < 20) {
    return (
      <Fragment>
        <p style={{ color: 'red' }}>Belum cukup umur {umur}</p>
        <button type="button" onClick={() => setUmur((umur) => umur + 1)}>
          Tambah
        </button>
      </Fragment>
    );
  }

  return (
    <div className="container">
      <h3
        style={{
          color: 'blue',
          fontSize: '30px',
          fontFamily: 'Arial',
          textDecoration: 'underline',
        }}
      >
        Halo, {nama}
      </h3>
      <p>Umur : {umur}</p>

      <button type="button" onClick={() => setUmur((umur) => umur + 1)}>
        Tambah
      </button>
      <button type="button" onClick={() => setUmur((umur) => umur - 1)}>
        Kurang
      </button>
      <br />
      <br />
      <button
        className="login"
        onClick={() => setIsLogin((login) => !login)}
        type="button"
      >
        {isLogin ? 'Logout' : 'Login'}
      </button>
      {isLogin ? (
        <p>sudah login</p>
      ) : (
        <p style={{ color: 'red' }}>belum login</p>
      )}

      <button onClick={() => setIsMessage((msg) => !msg)}>
        {isMessage ? 'Hide' : 'Show'}
      </button>

      {isMessage && (
        <p
          style={{
            backgroundColor: 'yellow',
            fontFamily: 'arial',
            height: '50px',
            width: '50%',
            lineHeight: '50px',
            textAlign: 'center',
            fontSize: '30px',
            padding: '30px',
          }}
        >
          Ada pesan nihh
        </p>
      )}
    </div>
  );
}

export default Bio;
