import {Routes, Route, ScrollRestoration} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import DashboardPengelola from './pages/DashboardPengelola'
import PengelolaProfilAkun from './pages/PengelolaProfilAkun'
import PengelolaDataPenjualan from './pages/PengelolaDataPenjualan'
import PengelolaDataPenjualanEdit from './pages/PengelolaDataPenjualanEdit'
import PengelolaDataPencarian from './pages/PengelolaDataPencarian'
import PengelolaDataPencarianEdit from './pages/PengelolaDataPencarianEdit'
import PengelolaDataTabungan from './pages/PengelolaDataTabungan'
import PengelolaKelolaLapakPenjualan from './pages/PengelolaKelolaLapakPenjualan'
import PengelolaKelolaLapakPenjualanTambah from './pages/PengelolaKelolaLapakPenjualanTambah'
import PengelolaKelolaLapakPenjualanEdit from './pages/PengelolaKelolaLapakPenjualanEdit'
import PengelolaKelolaLapakPencarian from './pages/PengelolaKelolaLapakPencarian'
import PengelolaKelolaLapakPencarianTambah from './pages/PengelolaKelolaLapakPencarianTambah'
import PengelolaKelolaLapakPencarianEdit from './pages/PengelolaKelolaLapakPencarianEdit'
import MenjadiPengelola from './pages/MenjadiPengelola'

function App() {
  return (
    <>
      <ScrollToTop/>
        <Routes>
          <Route path="/dashboard-pengelola/:id" element={<DashboardPengelola/>}/>
          <Route path="/profil-akun-pengelola/:id" element={<PengelolaProfilAkun/>}/>
          <Route path="/data-penjualan-pengelola/" element={<PengelolaDataPenjualan/>}/>
          <Route path="/data-penjualan-pengelola/edit" element={<PengelolaDataPenjualanEdit/>}/>
          <Route path="/data-pencarian-pengelola/" element={<PengelolaDataPencarian/>}/>
          <Route path="/data-pencarian-pengelola/edit" element={<PengelolaDataPencarianEdit/>}/>
          <Route path="/data-tabungan-pengelola/" element={<PengelolaDataTabungan/>}/>
          <Route path="/kelola-lapak-penjualan-pengelola/" element={<PengelolaKelolaLapakPenjualan/>}/>
          <Route path="/kelola-lapak-penjualan-pengelola/tambah" element={<PengelolaKelolaLapakPenjualanTambah/>}/>
          <Route path="/kelola-lapak-penjualan-pengelola/edit" element={<PengelolaKelolaLapakPenjualanEdit/>}/>
          <Route path="/kelola-lapak-pencarian-pengelola/" element={<PengelolaKelolaLapakPencarian/>}/>
          <Route path="/kelola-lapak-pencarian-pengelola/tambah" element={<PengelolaKelolaLapakPencarianTambah/>}/>
          <Route path="/kelola-lapak-pencarian-pengelola/edit" element={<PengelolaKelolaLapakPencarianEdit/>}/>
          <Route path="/menjadi-pengelola" element={<MenjadiPengelola/>}/>
        </Routes>
    </>
  );
}

export default App;
