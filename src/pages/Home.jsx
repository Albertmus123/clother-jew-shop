import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Home = () => {
  const notify = () => toast.success("Added to Cart");
  return (
    <>
    <div className="flex flex-row py-48">
    <div class="basis-1/5"></div>
    <div class="basis-3/5  justify-center">
   
      <h1 className='font-bold lg:font-extrabold text-xl lg:text-6xl'>Welcome to Best Clother Shop!</h1>
      <div className='flex justify-center pt-8'>
      <button type="button" className='text-sky-500  px-8 outline outline-2 py-2  outline-pink-500 rounded-full hover:text-white hover:bg-pink-400'   >Get Started </button>
      </div>

      </div>
      <div class="basis-1/5"></div>    
    </div>

    <div className='flex justify-center pb-24'>
        <h1 className='font-bold text-xl lg:text-4xl'>Our Product</h1>
    </div>

    <div className="grid grid-cols-1 gap-8   md:grid-cols-3 lg:grid-cols-4 px-12 justify-center">
      <div className='card grid shadow shadow-2  '>
        <div className="card-image grid justify-center bg-slate-100 hover:opacity-75">
          <img  className="h-full w-full object-cover object-center lg:h-full lg:w-full" src="https://i.etsystatic.com/20732324/r/il/eb65d2/4686471376/il_fullxfull.4686471376_pbvz.jpg" alt="p1" />
        </div>
        <div className="cart-title grid grid-cols-2 py-4">
          <div>
          <h1 className=' text-gray-500 text-xl px-2 '>T-shit</h1>
          <p className='text-gray-500 text-sm px-2 ' >
            5000 Rwf
          </p>
          </div>
          <div className='me-4'>
          <button onClick={notify} className='text-fuchsia-100  opacity-75  mt-4  w-full bg-sky-800 p-2 hover:text-white hover:bg-sky-900 rounded-md ' type="button">Add to cart</button>
          <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
          </div>
        </div>
        </div>
      
      <div className='card grid shadow shadow-2  '>
        <div className="card-image grid justify-center bg-slate-100 hover:opacity-75">
          <img  className="h-full w-full object-cover object-center lg:h-full lg:w-full" src="https://i.etsystatic.com/20732324/r/il/eb65d2/4686471376/il_fullxfull.4686471376_pbvz.jpg" alt="p1" />
        </div>
        <div className="cart-title grid grid-cols-2 py-4">
          <div>
          <h1 className=' text-gray-500 text-xl px-2 '>T-shit</h1>
          <p className='text-gray-500 text-sm px-2 ' >
            5000 Rwf
          </p>
          </div>
          <div className='me-4'>
          <button onClick={notify} className='text-fuchsia-100  opacity-75  mt-4  w-full bg-sky-800 p-2 hover:text-white hover:bg-sky-900 rounded-md ' type="button">Add to cart</button>
          <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
          </div>
        </div>
        </div>
      
      <div className='card grid shadow shadow-2  '>
        <div className="card-image grid justify-center bg-slate-100 hover:opacity-75">
          <img  className="h-full w-full object-cover object-center lg:h-full lg:w-full" src="https://i.etsystatic.com/20732324/r/il/eb65d2/4686471376/il_fullxfull.4686471376_pbvz.jpg" alt="p1" />
        </div>
        <div className="cart-title grid grid-cols-2 py-4">
          <div>
          <h1 className=' text-gray-500 text-xl px-2 '>T-shit</h1>
          <p className='text-gray-500 text-sm px-2 ' >
            5000 Rwf
          </p>
          </div>
          <div className='me-4'>
          <button onClick={notify} className='text-fuchsia-100  opacity-75  mt-4  w-full bg-sky-800 p-2 hover:text-white hover:bg-sky-900 rounded-md ' type="button">Add to cart</button>
          <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
          </div>
        </div>
        </div>
      
      <div className='card grid shadow shadow-2  '>
        <div className="card-image grid justify-center bg-slate-100 hover:opacity-75">
          <img  className="h-full w-full object-cover object-center lg:h-full lg:w-full" src="https://i.etsystatic.com/20732324/r/il/eb65d2/4686471376/il_fullxfull.4686471376_pbvz.jpg" alt="p1" />
        </div>
        <div className="cart-title grid grid-cols-2 py-4">
          <div>
          <h1 className=' text-gray-500 text-xl px-2 '>T-shit</h1>
          <p className='text-gray-500 text-sm px-2 ' >
            5000 Rwf
          </p>
          </div>
          <div className='me-4'>
          <button onClick={notify} className='text-fuchsia-100  opacity-75  mt-4  w-full bg-sky-800 p-2 hover:text-white hover:bg-sky-900 rounded-md ' type="button">Add to cart</button>
          <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" 
                />
          </div>
        </div>
        </div>
      
      <div className='card grid shadow shadow-2  '>
        <div className="card-image grid justify-center bg-slate-100 hover:opacity-75">
          <img  className="h-full w-full object-cover object-center lg:h-full lg:w-full" src="https://i.etsystatic.com/20732324/r/il/eb65d2/4686471376/il_fullxfull.4686471376_pbvz.jpg" alt="p1" />
        </div>
        <div className="cart-title grid grid-cols-2 py-4">
          <div>
          <h1 className=' text-gray-500 text-xl px-2 '>T-shit</h1>
          <p className='text-gray-500 text-sm px-2 ' >
            5000 Rwf
          </p>
          </div>
          <div className='me-4'>
          <button onClick={notify} className='text-fuchsia-100  opacity-75  mt-4  w-full bg-sky-800 p-2 hover:text-white hover:bg-sky-900 rounded-md ' type="button">Add to cart</button>
          <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
          </div>
        </div>
        </div>
      
      <div className='card grid shadow shadow-2  '>
        <div className="card-image grid justify-center bg-slate-100 hover:opacity-75">
          <img  className="h-full w-full object-cover object-center lg:h-full lg:w-full" src="https://i.etsystatic.com/20732324/r/il/eb65d2/4686471376/il_fullxfull.4686471376_pbvz.jpg" alt="p1" />
        </div>
        <div className="cart-title grid grid-cols-2 py-4">
          <div>
          <h1 className=' text-gray-500 text-xl px-2 '>T-shit</h1>
          <p className='text-gray-500 text-sm px-2 ' >
            5000 Rwf
          </p>
          </div>
          <div className='me-4'>
          <button onClick={notify} className='text-fuchsia-100  opacity-75  mt-4  w-full bg-sky-800 p-2 hover:text-white hover:bg-sky-900 rounded-md ' type="button">Add to cart</button>
          <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
          </div>
        </div>
        </div>
      
      <div className='card grid shadow shadow-2  '>
        <div className="card-image grid justify-center bg-slate-100 hover:opacity-75">
          <img  className="h-full w-full object-cover object-center lg:h-full lg:w-full" src="https://i.etsystatic.com/20732324/r/il/eb65d2/4686471376/il_fullxfull.4686471376_pbvz.jpg" alt="p1" />
        </div>
        <div className="cart-title grid grid-cols-2 py-4">
          <div>
          <h1 className=' text-gray-500 text-xl px-2 '>T-shit</h1>
          <p className='text-gray-500 text-sm px-2 ' >
            5000 Rwf
          </p>
          </div>
          <div className='me-4'>
          <button onClick={notify} className='text-fuchsia-100  opacity-75  mt-4  w-full bg-sky-800 p-2 hover:text-white hover:bg-sky-900 rounded-md ' type="button">Add to cart</button>
          <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
          </div>
        </div>
        </div>
      
      
        
    </div>
    </> 
  )
}
