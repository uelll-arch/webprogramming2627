// src/component/TabelTransaksiDinamis.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Spinner, Alert, Badge, Container } from 'react-bootstrap';

function TabelTransaksiDinamis() {
  const [transaksi, setTransaksi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ambilDataServer = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Request HTTP GET ke REST API Server
        const response = await axios.get('http://localhost:3000/transaksi');
        setTransaksi(response.data);
      } catch (err) {
        // Menangkap pesan kesalahan jika request gagal
        setError('Gagal memuat data dari server. Pastikan API backend berjalan.');
      } finally {
        // Mematikan indikator loading baik sukses maupun gagal
        setIsLoading(false);
      }
    };

    ambilDataServer();
  }, []);

  // 1. Conditional Rendering: Tampilan saat Data Sedang Dimuat (Loading)
  if (isLoading) {
    return (
      <Container className="text-center my-5">
        <Spinner animation="border" variant="primary" role="status" />
        <p className="mt-2 text-muted">Sedang memuat data transaksi...</p>
      </Container>
    );
  }

  // 2. Conditional Rendering: Tampilan saat Terjadi Error Jaringan
  if (error) {
    return (
      <Container className="my-4">
        <Alert variant="danger">
          <Alert.Heading>Kesalahan Sistem</Alert.Heading>
          <p>{error}</p>
        </Alert>
      </Container>
    );
  }

  // 3. Render Utama: Tampilan Data jika Berhasil Diterima
  return (
    <Container className="my-4">
      <h3 className="mb-3">Riwayat Transaksi Keuangan</h3>

      {transaksi.length === 0 ? (
        <Alert variant="info">Belum ada data transaksi yang tersimpan.</Alert>
      ) : (
        <Table striped bordered hover responsive className="shadow-sm">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Keterangan</th>
              <th>Kategori</th>
              <th>Nominal</th>
            </tr>
          </thead>
          <tbody>
            {transaksi.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.keterangan}</td>
                <td>
                  <Badge bg={item.kategori === "Pemasukan" ? 'success' : 'danger'}>
                    {item.kategori}
                  </Badge>
                </td>
                <td className="fw-bold">
                  Rp {Number(item.nominal).toLocaleString('id-ID')}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}

export default TabelTransaksiDinamis;