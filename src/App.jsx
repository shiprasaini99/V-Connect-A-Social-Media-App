import AuthPage from './pages/AuthPage/AuthPage'
import HomePage from './pages/HomePage/HomePage'
import { Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
     <Routes>
      <Route path='/'  element={<HomePage/>} />
      <Route path='/auth'  element={<AuthPage/>} />
     </Routes>
    </>
  )
}

export default App
