import { Suspense } from 'react'
import './App.css'
import Banner from './components/Homepage/Banner/Banner'
import NavBar from './components/NavBar/NavBar'
import Stats from './components/Homepage/Banner/Stats'
import ProductSection from './components/Homepage/ProductSection/ProductSection'

const fetchProduct = async() => {
  const res = await fetch('/productData.json')
  return res.json();
}

function App() {
  const productPromise = fetchProduct();
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Suspense>
        <Stats></Stats>
      </Suspense>
      <Suspense>
        <ProductSection productPromise={productPromise}></ProductSection>
      </Suspense>
    </>
  )
}

export default App
