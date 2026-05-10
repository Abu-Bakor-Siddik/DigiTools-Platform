import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Homepage/Banner/Banner'
import NavBar from './components/NavBar/NavBar'
import Stats from './components/Homepage/Banner/Stats'
import ProductSection from './components/Homepage/ProductSection/ProductSection'
import { ToastContainer } from 'react-toastify'
import GetStarted from './components/Homepage/GetStarted/GetStarted'

const fetchProduct = async() => {
  const res = await fetch('/productData.json')
  return res.json();
}

function App() {
  const productPromise = fetchProduct();
  const [selectedProducts, setSelectedProducts] = useState([]);
  return (
    <>
      <NavBar selectedProducts={selectedProducts}></NavBar>

      <Banner></Banner>

      <ToastContainer></ToastContainer>

      <Suspense>
        <Stats></Stats>
      </Suspense>

      <Suspense>
        <ProductSection productPromise={productPromise} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}></ProductSection>
      </Suspense>

      <GetStarted></GetStarted>

    </>
  )
}

export default App
