
import { useDispatch } from "react-redux"
import { addProducts } from "./features/products/productSlice"
import { useEffect } from "react"
// import Products from "./pages/Products"
import Login from "./component/Login"



const App = () => {
  const dispatch = useDispatch()

  const fetchProducts = async() => {
    try{
      const res = await fetch("https://dummyjson.com/products")
      const data = await res.json()
      dispatch(addProducts(data.products))
    }catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])


  return (
    <div>
      {/* <Products/> */}
      <Login/>
    </div>
  )
}

export default App
