// src/component/FormTambahTransaksiPost.jsx
import { useState } from 'react';
import axios from 'axios';
import { Form, Button, Card, Alert, Spinner } from 'react-bootstrap';

function FormTambahTransaksiPost({ onDataAdded }) {
  const [keterangan, setKeterangan] = useState('');
  const [kategori, setKategori] = useState('Pengeluaran');
  const [nominal, setNominal] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    // 1. Susun payload data yang akan dikirim ke server
    const dataBaru = {
      keterangan,
      kategori,
      nominal: Number(nominal) // Memastikan konversi ke tipe angka
    };

    try {
      // 2. Eksekusi HTTP POST Request ke REST API Server
      const response = await axios.post('http://localhost:3000/transaksi', dataBaru);

      // 3. Tampilkan pesan sukses dan perbarui state utama di komponen induk
      setSuccessMsg('Data transaksi berhasil disimpan!');
      if (onDataAdded) {
        onDataAdded(response.data); // Mengirim objek data baru termasuk ID dari server
      }

      // 4. Reset bidang input form
      setKeterangan('');
      setKategori('Pengeluaran');
      setNominal('');
    } catch (error) {
      setErrorMsg('Gagal menyimpan data ke server. Silakan coba lagi.');
      console.error('Error POST:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="p-4 shadow-sm mb-4">
      <Card.Title className="mb-3">Tambah Transaksi Baru</Card.Title>

      {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
      {successMsg && <Alert variant="success">{successMsg}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Keterangan Transaksi</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan keterangan"
            value={keterangan}
            onChange={(e) => setKeterangan(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Kategori</Form.Label>
          <Form.Select
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
          >
            <option value="Pengeluaran">Pengeluaran</option>
            <option value="Pemasukan">Pemasukan</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Nominal (Rp)</Form.Label>
          <Form.Control
            type="number"
            placeholder="0"
            value={nominal}
            onChange={(e) => setNominal(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Spinner as="span" animation="border" size="sm" className="me-2" />
              Menyimpan...
            </>
          ) : (
            'Simpan Data'
          )}
        </Button>
      </Form>
    </Card>
  );
}

export default FormTambahTransaksiPost;
