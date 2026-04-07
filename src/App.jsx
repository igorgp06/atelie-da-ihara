import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Main } from './pages/Main'
import { Home } from './pages/public/Home/Home'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}>

          <Route index element={<Home />} />
          {/* rotas futuras aq */}
        </Route>

        {/* TODO: implementar página não encontrada <Route path='*' element={<NotFound />} />  */}
      </Routes>
    </BrowserRouter>

  )
}

export default App