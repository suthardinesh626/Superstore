import { useContext } from "react"
import SelectedProductContext from "../../context/SelectedProductContext"

const BuyNow = () => {
  const { selectedProduct } = useContext(SelectedProductContext);

  return (
    <div className='flex flex-col justify-center items-center md:w-3/4 lg:w-1/2 xl:w-1/3 2xl:w-1/4 mx-auto'>
      <div className=''>
        <h4 className='text-4xl xl:text-3xl lg:text-2xl md:text-xl font-extrabold underline'>Buy Now</h4>
      </div>
      <div className='flex flex-col m-6 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/3 border-4  border-gray-100'>
        <h5 className='font-bold mx-6 my-4'>Products Details:</h5>
        <div className='flex felx-row justify-evenly m-5 p-4 ' >
          {selectedProduct && (
            <div className="flex flex-col md:flex-row justify-between">
              <div className="2xl:w-full  md:w-1/2 m-3">
                <img src={selectedProduct.thumbnail} alt="" className="w-full object-cover" />
              </div>
              <div className="m-3">
                <p className="font-bold">{selectedProduct.description}</p>
                <p className="font-bold underline">$ {selectedProduct.price}</p>
              </div>
            </div>
          )}
        </div>
        <button className="border-2  border-slate-800	rounded-lg mx-6 my-3 p-2 text-blue-900 text-sm">Pay Now</button>
      </div>
    </div>
  )
}

export default BuyNow