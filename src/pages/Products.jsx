import { useDispatch, useSelector } from "react-redux"
import { deleteProducts } from "../features/products/productSlice"
import { LuTrash2 } from "react-icons/lu"

const Products = () => {
    const {data,loading} = useSelector((state) => state.products)
    const dispatch = useDispatch()

    if (loading) {
         return (
    <div className=' h-screen flex justify-center items-center '>
                <div className=' w-20 h-20 rounded-full border-4 border-b-0  border-black animate-spin'></div>
            </div>
  )
    }

    const handleDeleteProduct = (product) => {
        dispatch(deleteProducts(product))
    }

      return (
        <div className='min-h-screen p-10'>
            <h1 className=' font-bold text-4xl italic'>
                All Products
            </h1>
            <div className=' grid grid-cols-3 gap-5 p-5 '>
                {
                    data && data.map((product) => {
                        // console.log(product);

                        return (
                            <div key={product.id} className=' relative border  p-5 text-center flex flex-col items-center bg-amber-200 rounded-2xl  '>
                                <img src={product.thumbnail} alt={product.title} />
                                <h1>
                                    {product.title}
                                </h1>
                                <button onClick={() => handleDeleteProduct(product.id)} className=' absolute right-5 text-red-700 cursor-pointer  hover:text-red-600'><LuTrash2/>
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
 
}

export default Products
