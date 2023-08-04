import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/History'
import { DefaultLayout } from './layouts/DefaultLayouts'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {/* Rota que passa por todo o layout */}

        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
