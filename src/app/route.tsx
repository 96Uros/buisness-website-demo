import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Auth from '../pages/auth'
import CPanel from '../pages/cPanel'
import Donate from '../pages/donate'

export default function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/cpanel" element={<CPanel />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </BrowserRouter>
  )
}
