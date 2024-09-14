import './css/App.css'
import Partidas from './components/Partidas';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Espera from './components/Espera';
import Home from './components/Home';
import Listar from './components/Listar';

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Home /><Partidas /></>}/>
          <Route path='/espera/:id_partida' element={<Espera />}/>
          <Route path='/que_es_esto' element={<Listar />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
