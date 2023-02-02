import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons'
import ProductCard from './components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from './store/slices/products.slice'
import ProductDetails from './components/ProductDetails'
import Purchases from './components/Purchases'
import Login from './components/Login'
import AppNavbar from './components/AppNavbar'
import LoadingScreen from './components/LoadingScreen'
import ProtectedRoutes from './components/ProtectedRoutes'
import PurchaseSidebar from './components/PurchaseSidebar'


function App() {

  const dispatch = useDispatch()

  const [count, setCount] = useState(0)

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const isLoading = useSelector(state => state.isLoading)

  return (
    <HashRouter>
        <AppNavbar />
        
        {isLoading && <LoadingScreen/>}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedRoutes/>} >
        <Route path='/purchases' element={<Purchases />} />
        </Route>
        <Route path='/product' element={<ProductCard />} />
        <Route path='/product/:id' element={<ProductDetails/>}/>
        {/* <Route path='/sidebar' element={<PurchaseSidebar />}/> */}
        {/* <Route element={<PurchaseSidebar show={show} handleClose={handleClose} /> */}
      </Routes>
    </HashRouter>
  )
}

export default App
