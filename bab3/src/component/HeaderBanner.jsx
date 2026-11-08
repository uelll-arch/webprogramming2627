// src/component/HeaderBanner.jsx

import { Container } from 'react-bootstrap';

function HeaderBanner() {
  return (
    <div className="p-5 mb-4 bg-light rounded-3 border">
      <Container fluid className="py-3">
        <h1 className="display-5 fw-bold">Catatan Keuangan</h1>
        <p className="col-md-8 fs-4">
          Kelola arus kas, pantau pengeluaran harian, dan capai
          target finansial Anda secara terencana.
        </p>
      </Container>
    </div>
  );
}
export default HeaderBanner;