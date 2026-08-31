import './box.css';
import { useState } from 'react';

function Box() {
  const [isActive, setIsActive] = useState<boolean>(true);

  return (
    <>
      <button onClick={() => setIsActive((prev) => !prev)}>
        Activate Class
      </button>
      <div className={isActive ? 'box active' : 'box deactive'}>
        <h3>Materi React</h3>
        <p>Status : {isActive ? 'Kelas Aktif' : 'Kelas Tidak Aktif'}</p>
      </div>
    </>
  );
}
export default Box;
