import React from 'react'
import Product from "../models/Product"
import mongoose from "mongoose"
const Drinks = () => {
  // console.log(products);
  return (
    <div>
    <section className="text-gray-200 body-font bg-black">
<div className="contain  er px-5 py-24 mx-auto ">
  <div className="flex flex-wrap -m-4">
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative  rounded overflow-hidden">
        <img alt="ecommerce" className="  h-[36vh] block m-auto " src="/juice.jpg"/>
      </a>
      <div className="mt-4 text-center">
        <h3 className="text-gray-200 text-xs tracking-widest title-font mb-1"></h3>
        <h2 className="text-gray-400 title-font text-lg font-medium">Lemon juice</h2>
        <p className="mt-1">$16.00</p>
      </div>
    </div>
    
   
    
  </div>
</div>
</section>
  </div>
  )
}


export default Drinks