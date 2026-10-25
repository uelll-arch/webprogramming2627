import { useState, useEffect } from 'react';
{/* 
// 
import {useState} from 'react'; 
*/}
import {Form, InputGroup, Modal, Button, Table, ProgressBar}from 'react-bootstrap';
import AppNavigation from './AppNavigation';

// const s = useState(false)
function TransactionManager() {
  const [show, setShow] = useState(false)
  const [transaksi, setTransaksi] = useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  /* implementasi promise tradisional

  const ambilData = () => {
    fetch('http://localhost:3000/transaksi')
    .then ((response) => response.json())
    .then((data) => {
      console.log('Data diterima:', data)
      setTransaksi(data)
    })
    .catch((error) => {
      console.error('ada kesalahan mengambil data', error );
    });

  };
  */
 //Perbaikan setTransaksi fiks
  const ambilDataAsync = async () =>{   
    try {
      const response = await fetch('http://localhost:3000/transaksi');
      if (!response.ok) {
        throw new Error ('Gagal mengambil data dari server')
      }
      const data = await response.json();
      console.log ('Data diterima:', data)
      setTransaksi(data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  useEffect(() => {
    ambilDataAsync();
  }, []);

  return (
    <div className="container mt-4">
      {/* <AppNavigation /> */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Penggunaan Anggaran</h3>
        <Button variant="success" onClick={handleShow}>
          + Tambah Transaksi
        </Button>
      </div>

      <ProgressBar now={75} label="75%" variant="warning" className="mb-4" />

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Keterangan</th>
            <th>Kategori</th>
            <th>Nominal</th>
          </tr>
        </thead>
        <tbody>
          {
          transaksi.map((item, index) => (
            <tr key={item.id || index}>
              <td>{index + 1}</td>
              <td>{item.keterangan}</td>
              <td>{item.kategori}</td>
              <td>{item.nominal}</td>
            </tr>
             )
            )
          }

        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Catat Transaksi Baru</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Keterangan</Form.Label>
              <Form.Control type="text" placeholder="Misal: Bensin" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nominal</Form.Label>
              <InputGroup>
                <InputGroup.Text>Rp</InputGroup.Text>
                <Form.Control type="number" placeholder="0" />
              </InputGroup>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Batal
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Simpan Transaksi
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TransactionManager;