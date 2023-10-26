import React, { useState } from 'react'

export const ProductDetails = () => {
    // const [cartItem, setCartItem] = useState(0)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 bg:grid-cols-2 mx-2 my-4 md:mx-32 lg:mx-32 border-2 mt-8'>
         <div >
              <img src="https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg" 
              alt="Two each of gray, white, and black shirts arranged on table." 
              className="w-42 h-42 object-cover object-center" />
            </div>
        <div className="grid py-4 px-4">
        <h2 class="text-2xl pb-2 font-bold text-gray-900 sm:pr-12">Basic Tee 6-Pack</h2>

        <section >
                <h3 id="information-heading" class="sr-only">Product information</h3>

                <p class="text-2xl text-gray-900">$192</p>

                <div class="mt-6">
                  <h4 class="sr-only">Reviews</h4>
                  <div class="flex items-center">
                    <div class="flex items-center">
                      <svg class="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                      </svg>
                      <svg class="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                      </svg>
                      <svg class="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                      </svg>
                      <svg class="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                      </svg>
                      <svg class="text-gray-200 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <p class="sr-only">3.9 out of 5 stars</p>
                    <a href="#" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
                  </div>
                </div>
              </section>
                <section>
                <h3 id="options-heading" class="sr-only">Product options</h3>

                <form>
                
                  <div>
                    <h4 class="text-sm font-medium text-gray-900">Color</h4>

                    <fieldset class="mt-4">
                      <legend class="sr-only">Choose a color</legend>
                      <span class="flex items-center space-x-3">
                      
                        <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                          <input type="radio" name="color-choice" value="White" class="sr-only" aria-labelledby="color-choice-0-label" />
                          <span id="color-choice-0-label" class="sr-only">White</span>
                          <span aria-hidden="true" class="h-8 w-8 bg-white rounded-full border border-black border-opacity-10"></span>
                        </label>
                     
                        <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                          <input type="radio" name="color-choice" value="Gray" class="sr-only" aria-labelledby="color-choice-1-label" />
                          <span id="color-choice-1-label" class="sr-only">Gray</span>
                          <span aria-hidden="true" class="h-8 w-8 bg-gray-200 rounded-full border border-black border-opacity-10"></span>
                        </label>
                      
                        <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-900">
                          <input type="radio" name="color-choice" value="Black" class="sr-only" aria-labelledby="color-choice-2-label" />
                          <span id="color-choice-2-label" class="sr-only">Black</span>
                          <span aria-hidden="true" class="h-8 w-8 bg-gray-900 rounded-full border border-black border-opacity-10"></span>
                        </label>
                      </span>
                    </fieldset>
                  </div>

               
                  <div class="mt-10">
                    <div class="flex items-center justify-between">
                      <h4 class="text-sm font-medium text-gray-900">Size</h4>
                      <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
                    </div>

                    <fieldset class="mt-4">
                      <legend class="sr-only">Choose a size</legend>
                      <div class="grid grid-cols-4 gap-4">
                        <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                          <input type="radio" name="size-choice" value="XXS" class="sr-only" aria-labelledby="size-choice-0-label" />
                          <span id="size-choice-0-label">XXS</span>
                        
                          <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                        </label>
                        <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                          <input type="radio" name="size-choice" value="XS" class="sr-only" aria-labelledby="size-choice-1-label" />
                          <span id="size-choice-1-label">XS</span>
                         
                          <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                        </label>
                        <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                          <input type="radio" name="size-choice" value="S" class="sr-only" aria-labelledby="size-choice-2-label" />
                          <span id="size-choice-2-label">S</span>
                      
                          <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                        </label>
                        <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                          <input type="radio" name="size-choice" value="M" class="sr-only" aria-labelledby="size-choice-3-label" />
                          <span id="size-choice-3-label">M</span>
                         
                          <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                        </label>
                        <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                          <input type="radio" name="size-choice" value="L" class="sr-only" aria-labelledby="size-choice-4-label" />
                          <span id="size-choice-4-label">L</span>
                     
                          <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                        </label>
                        <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm" >
                          <input type="radio" name="size-choice" value="XL" class="sr-only" aria-labelledby="size-choice-5-label" />
                          <span id="size-choice-5-label">XL</span>
                      
                          <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                        </label>
                      
                        <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                          <input type="radio" name="size-choice" value="XXL" class="sr-only" aria-labelledby="size-choice-6-label" />
                          <span id="size-choice-6-label">XXL</span>
                     
                          <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                        </label>
                    
                        <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-not-allowed bg-gray-50 text-gray-200">
                          <input type="radio" name="size-choice" value="XXXL" disabled class="sr-only" aria-labelledby="size-choice-7-label" />
                          <span id="size-choice-7-label">XXXL</span>
                          <span aria-hidden="true" class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                            <svg class="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                              <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                            </svg>
                          </span>
                        </label>
                      </div>
                    </fieldset>
                  </div>
                    <div className='flex justify-center'>
                  <button type="button" className='px-8 mt-8 w-full  outline outline-2 py-2 outline-offset-2  outline-[#10b981] hover:outline-[#0f766e] '   >Add To cart</button>
                  </div>
                </form>
              </section>
           
 
        </div>

    </div>
  )
}
