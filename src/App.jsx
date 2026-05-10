
import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import NavBar from './components/NavBar/NavBar'
import Stats from './components/Banner/Stats'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Suspense>
        <Stats></Stats>
      </Suspense>
    </>
  )
}

export default App
