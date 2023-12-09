import { useContext } from "react"
import SelectedProductContext from "../../context/SelectedProductContext"

const BuyNow = () => {
  const { selectedProduct } = useContext(SelectedProductContext);

  return (
    <div className='flex flex-col justify-center items-center  '>
      <div className=''>
        <h4 className='text-4xl font-extrabold underline'>Buy Now</h4>
      </div>
      <div className='flex flex-col m-6 w-1/3 border-4  border-gray-100'>
        <h5 className='font-bold mx-6 my-4'>Products Details:</h5>
        <div className='flex felx-row justify-evenly m-5 p-4 ' >
          {selectedProduct && (
            <div className="flex flex-row justify-between">
              <div className="w-2/3 m-3">
                <img src={selectedProduct.thumbnail} alt="" />
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