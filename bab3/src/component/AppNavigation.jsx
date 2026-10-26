import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function AppNavigation(){
  return (
    <Navbar bg='dark' variant='dark' expand='lg' className='mb-4'>
      <Container>
        <Navbar.Brand as={NavLink} to='/'>Catatan Keuangan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/transaksi">Transaksi</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/badge">Badge</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/CardStatusDemo">CardStatusDemo</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/HeaderBanner">HeaderBanner</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/TransactionManager">TransactionManager</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/kartu">KartuRingkasan</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/LayoutGrid">LayoutGrid</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/wallet">WalletSummary</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/FormTambahTransaksi">FormTambahTransaksi</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default  AppNavigation