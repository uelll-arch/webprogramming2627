// src/component/FormTambahTransaksi.jsx
import { useState } from 'react';
import { Button, Alert, Spinner, Form } from 'react-bootstrap';

function FormTambahTransaksi() {
  const [nominal, setNominal] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sukses, setSukses] = useState(false);

  // Event Handler Asinkron untuk Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSukses(false);

    try {
      // Simulasi pengiriman HTTP POST Request ke Server/API
      const response = await
fetch('https://api.example.com/transaksi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nominal: Number(nominal) }),
      });

      if (!response.ok) {
        throw new Error('Gagal menyimpan data transaksi ke server.');
      }

      setSukses(true);
      setNominal(''); // Reset form
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // Matikan status loading baik sukses maupun gagal
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="p-3 border rounded">
      {error && <Alert variant="danger">{error}</Alert>}
      {sukses && <Alert variant="success">Transaksi berhasil disimpan!</Alert>}

      <Form.Group className="mb-3">
        <Form.Label>Nominal Transaksi (Rp)</Form.Label>
        <Form.Control
          type="number"
          value={nominal}
          onChange={(e) => setNominal(e.target.value)}
          placeholder="Masukkan nominal"
          required
        />
      </Form.Group>

      {/* Button interaktif merespon status loading */}
      <Button variant="primary" type="submit" disabled={loading}>
        {loading ? (
          <>
            <Spinner as="span" animation="border" size="sm" className="me-2" />
            Menyimpan...
          </>
        ) : (
          'Simpan Transaksi'
        )}
      </Button>
    </Form>
  );
}

export default FormTambahTransaksi;
