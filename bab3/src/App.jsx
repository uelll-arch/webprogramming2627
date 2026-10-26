import './App.css'
import { Route, Routes } from 'react-router-dom'
import TransaksiItem from './component/TransaksiItem'
import KartuRingkasan from './component/KartuRingkasan'
import Badge from './component/Badge'
import WalletSummary from './component/WalletSummary'
import AppNavigation from './component/AppNavigation'
import LayoutGrid from './component/LayoutGrid'
import CardStatusDemo from './component/CardStatusDemo'
import HeaderBanner from './component/HeaderBanner'
import TransactionManager from './component/TransactionManager'
import FormTambahTransaksi from './component/FormTambahTransaksi'
import DaftarTugas from './component/DaftarTugas'
import DaftarTugasFunction from './component/DaftarTugasFunction'
import PostListFetch from './component/PostListFetch'
import PostListAxios from './component/PostListAxios'

function App() {
  return (
    <>
      <AppNavigation />
      <Routes>
        <Route path='/transaksi' element={ <TransaksiItem />} />
        <Route path='/kartu' element={ <KartuRingkasan />} />
        <Route path='/badge' element={ <Badge />} />
        <Route path='/wallet' element={ <WalletSummary />} />
        <Route path='/LayoutGrid' element={ <LayoutGrid/>  } />
        <Route path='/HeaderBanner' element={ <HeaderBanner/>  } />
        <Route path='/CardStatusDemo' element={ <CardStatusDemo/> } />
        <Route path='/AppNavigation' element={ <AppNavigation/> } />
        <Route path='/TransactionManager' element={ <TransactionManager/> } />
        <Route path='/FormTambahTransaksi' element={ <FormTambahTransaksi/> } />
        <Route path='/DaftarTugas' element={ <DaftarTugas/> } />
        <Route path='/DaftarTugasFunction' element={ <DaftarTugasFunction/> } />
        <Route path='/PostListFetch' element={ <PostListFetch/> } />
        <Route path='/PostListAxios' element={ <PostListAxios/> } />
      </Routes>
    </>
  );
}

export default App;

//Test aja commit dan push
//test 2 aja