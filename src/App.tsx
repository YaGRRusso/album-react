import { useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import { RouteList } from './routes/RouteList'

function App() {
  const navigate = useNavigate();
  const location = useLocation()

  function returnPage() {
    if (location.pathname != '/') {
      navigate(-1)
    }
  }

  return (
    <div className='body'>
      <div className='header'><span className='return' onClick={returnPage}>←</span>Album de Fotos React</div>

      <RouteList />

      <div className='footer'>Criado por Yago Russo</div>
    </div>
  )
}

export default App
