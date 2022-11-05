import React from 'react'
const Product = () => {
  return (
    <>
         <div className=" mx-96 block p-6 rounded-lg shadow-lg bg-white max-w-md w-auto">
            <form className='w-auto'>
              <h1 className='text-center text-3xl mb-3 text-red-500 font-bold'>Product</h1>
                  <div className="form-group mb-6">
                    <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-70 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7" 
                     placeholder="Product Name"/>
                  </div>
                  <div className="form-group mb-6">
                      <textarea className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" rows="6"
                      cols="50" placeholder="Product Description"></textarea>
                  </div>
                  <div className="form-group mb-6">
                    <input type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-70 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7" 
                     placeholder="Product Price"/>
                  </div>
                  <div className="form-group mb-6">
                      <input type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-70 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7" 
                      placeholder="Stock"/>
                  </div>

                  <div className="form-group mb-6">
                      <input type="file" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-70 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7" 
                      placeholder="Stock"/>
                  </div>
                  <button type="submit" className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add Product</button>
            </form>
         </div>

    </>
  )
}

export default Product