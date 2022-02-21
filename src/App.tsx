import { Route, Routes } from 'react-router-dom'
import './App.css'
import Albums from './pages/Albums'

function App() {
  return (
    <div className='body'>
      <div className='header'><span className='return'>←</span>Album de Fotos React</div>

      <Routes>
        <Route path='/' element={<Albums />} />
      </Routes>

      <div className='footer'>Criado por Yago Russo</div>
    </div>
  )
}

export default App
