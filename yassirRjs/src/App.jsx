
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Contacts from './navbar/Contacts'
import Error from './navbar/Error'
import 'bootstrap/dist/css/bootstrap.min.css';
import Accueil from './navbar/Accueil'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Accueil/>}></Route>
      <Route path='/contacts' element={<Contacts />}></Route>
      <Route path='*' element={<Error />}></Route>
    </Routes>
    
    </>
  )
}

export default App
