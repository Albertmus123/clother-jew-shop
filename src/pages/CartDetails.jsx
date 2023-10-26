import React from 'react'

const products =[
  {
    name: "t-shit",
    price: 200,
    description : "nice product"
  },
  {
    name: "t-shit",
    price: 200,
    description : "nice product"
  },
  {
    name: "shit-mango",
    price: 200,
    description : "nice product"
  },
  {
    name: "t-shit",
    price: 200,
    description : "nice product"
  },
]


export const CartDetails = () => {
  
  return (
    <div className="grid px-4 mx-2 py-4 outline outline-2 gap-12">
        <div className='grid grid-cols-4'>
            <h1 className='text-xl font-bold'>Name</h1>
            <h1 className='text-xl font-bold'>Price</h1>
            <h1 className='text-xl font-bold'>Description</h1>
            <h1 className='text-xl font-bold'>Quantity</h1>
        </div>
      {products.map((value, index)=>(
        <div className="grid grid-cols-4">
            <div className=''>
              <h1>{value.name}</h1>
            </div>
            <div>
              <h1>{value.price} Rwf</h1>
            </div>
            <div>{value.description}</div>
            <div>Quantity</div>
        </div>
      ))}

    </div>
  )
}
