import './box.css';
import type { MateriProps } from './types/materi.type';

function Materi({ isActive, title }: MateriProps) {
  return (
    <>
      <div className={isActive ? 'box active' : 'box deactive'}>
        <h3>{title}</h3>
        <p>Status : {isActive ? 'Kelas Aktif' : 'Kelas Tidak Aktif'}</p>
      </div>
    </>
  );
}
export default Materi;
