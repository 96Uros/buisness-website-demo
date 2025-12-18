import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Auth from '../pages/auth'

export default function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}
