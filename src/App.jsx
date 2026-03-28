import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { MainPages } from './pages/MainPages'
import { Home } from './pages/public/Home/Home'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPages />}>

          <Route index element={<Home />} />
          {/* rotas futuras aq */}
        </Route>

        {/* TODO: implementar página não encontrada <Route path='*' element={<NotFound />} />  */}
      </Routes>
    </BrowserRouter>

  )
}

export default App