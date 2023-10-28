import React from 'react'

export const Modal = ({closeModel}) => {
  return (
    <div className='fixed inset-0  bg-gray-500 bg-opacity-75 transition-opacity'>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex mt-24  justify-center p-4 ">
        <div className="relative pe-12 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#10b981] sm:mx-0 sm:h-10 sm:w-10">
                      <p className="h-6 w-6 text-red-600" aria-hidden="true" >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                    </svg>

                      </p>
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <div className="text-base font-semibold leading-6 text-gray-900">
                        Create account
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Are you sure you want to create your account? This account creation will help you to make
                          orders. This account can be deactivated but not deleted.
                        </p>
                      </div>
                      <div className='pt-4'>
                        <label htmlFor="username" >Username <span className='text-[#10b981]'>*</span></label>
                        <input type="text" className='outline outline-2 rounded-md outline-offset-4 outline-[#10b981] w-full my-4' />
                      </div>
                      <div className='pt-2'>
                        <label htmlFor="username" >Email <span className='text-[#10b981]'>*</span></label>
                        <input type="text" className='outline rounded-md outline-2 outline-offset-4 outline-[#10b981] w-full my-4' />
                      </div>
                      <div className='pt-2'>
                        <label htmlFor="username" >Password<span className='text-[#10b981]'>*</span></label>
                        <input type="text" className='outline rounded-md outline-2 outline-offset-4 outline-[#10b981] w-full my-4' />
                      </div>
                      <div className='pt-2'>
                        <label htmlFor="username" >Confirm Password<span className='text-[#10b981]'>*</span></label>
                        <input type="text" className='outline rounded-md outline-2 outline-offset-4 outline-[#10b981] w-full my-4' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 pe-4 pb-4 justify-end">
                <button  onClick={()=>closeModel(false)} type="button" className='px-8 outline outline-2 py-2  outline-[#f87171] hover:outline-[#b91c1c]'   >Cancel</button>

                <button type="button" className='px-8 outline outline-2 py-2  outline-[#10b981] hover:outline-[#0f766e]'   >Create Account</button>

                </div>
              </div>
        </div>
        </div>
    </div>
  )
}
