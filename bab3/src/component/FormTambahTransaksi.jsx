// src/component/FormTambahTransaksi.jsx
import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

function FormTambahTransaksi() {
  const [keterangan, setKeterangan] = useState('');
  const [kategori, setKategori] = useState('Pengeluaran');
  const [nominal, setNominal] = useState('');

  return (
    <Card className="p-4 shadow-sm mb-4">
      <Card.Title className="mb-3">Tambah Transaksi Baru</Card.Title>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Keterangan Transaksi</Form.Label>
          <Form.Control
            type="text"
            placeholder="Misal: Bensin, Gaji, Belanja"
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

        <Button variant="primary" type="submit">
          Simpan Data
        </Button>
      </Form>
    </Card>
  );
}

export default FormTambahTransaksi;