import { Routes, Route} from 'react-router-dom'
import { Login } from '../pages/login'

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}