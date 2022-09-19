import { Routes, Route} from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Dashboard } from '../pages/Dasboard'
import Login from '../pages/login'
import { Produtos } from '../pages/Produtos'

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/"  element={<Dashboard />} />
        <Route path="/produtos"  element={<Produtos />} />
      </Route>
    </Routes>
  )
}