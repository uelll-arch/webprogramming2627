import { useState, useEffect } from 'react';
import axios from 'axios';

function DaftarTransaksi() {
  const [transaksi, setTransaksi] = useState([]);

  useEffect(() => {
    const fetchTransaksi = async () => {
      try {
        const response = await axios.get('http://localhost:3000/transaksi');
        setTransaksi(response.data);
      } catch (error) {
        console.error('Gagal mengambil data transaksi:', error);
      }
    };

    fetchTransaksi();
  }, []);

  return (
    <div>
      <h3>Daftar Transaksi</h3>
      <ul>
        {transaksi.map((item) => (
          <li key={item.id}>
            {item.keterangan} - Rp {item.nominal}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DaftarTransaksi;