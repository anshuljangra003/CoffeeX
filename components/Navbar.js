import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react';
import { AiOutlineShoppingCart,AiOutlineClose ,AiFillPlusCircle,AiFillMinusCircle,AiOutlineUser} from 'react-icons/ai';
import {FaUser} from 'react-icons/fa'
const Navbar = ({addToCart,cart,removeFromCart,clearCart,total}) => {
  // console.log(addToCart)
  const ref=useRef();
  const toggle1=()=>{
    if(ref.current.classList.contains("translate-x-full")){
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0")
    }
    else if(!ref.current.classList.contains("translate-x-full")){
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full")
    }
  }
  return (
    <div className='text-white flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-xl bg-black sticky top-0 z-10'>
      <div className='text-white logo mx-5 '>
          <Link href={'/'}><Image className="text-white shadow  w-auto rounded-sm h-auto align-middle border-none py-7" src="/logo2.png" alt="" width={100} height={100}/></Link> 
          </div> 
          <hr></hr>
        <div className='text-white nav'>
            <ul className='text-white flex items-center space-x-3 font-bold '>
               <Link href={"/coffee"}><a><li className="text-white ">Coffee</li></a></Link>
               <Link href={"/drinks"}><a><li className="text-white ">Drinks</li></a></Link>
               <Link href={"/breakfast"}><a><li className="text-white ">Breakfast</li></a></Link>
               <Link href={"/"}><a><li className="text-white ">More</li></a></Link>
            </ul>
          

            
        </div>

        <div className='text-white flex cart absolute right-0 top-10 mx-5'>
          <Link href="/login"><a><FaUser className='font-bold mx-6 my-1 text-white text-2xl'/></a></Link>
          <button onClick={toggle1} ><AiOutlineShoppingCart className='text-white text-3xl text-white'/></button>
          
        </div>
        <div ref={ref} className='text-white h-[100vh] absolute top-0 right-0 text-white bg-black p-10 transition-transform translate-x-full transform'>
          <h2 className='text-white font-bold text-xl'>Your Cart</h2>
          <span onClick={toggle1} className='text-white absolute top-2 right-2 cursor-pointer'><a><AiOutlineClose/></a></span>
          <ol> 
            {
            (Object.keys(cart).length==0)&&<div className='text-white font-semibold text-white'>Your Cart is Empty!</div>
            }
           {Object.keys(cart).map((k)=>{ 
                                    return
                                       <li key={k} className='text-white list-decimal space-x-2'>
                                        <div className='text-white flex my-3'>
                                          <div className='text-white font-semibold space '>
                                           {cart[k].name}
                                            </div>
                                          <div className="text-white quantity flex items-center justify-center w-1/3 "><AiFillMinusCircle onClick={()=>{
                                            removeFromCart(cart[k].name,k,1,cart[k].price,cart[k].variant)
                                          }} className='text-white mx-1 cursor-pointer'/>{cart[k].qty}<AiFillPlusCircle onClick={()=>{
                                            addToCart(k,cart[k].name,1,cart[k].price,cart[k].variant)
                                          }} className='text-white mx-1 cursor-pointer'/>
                                          </div>

                                        </div>
                                        </li>
                                        

           })}
           <span>
             Subtotal:{total}
           </span>
            <button className="text-white   text-white bg-purple-400 border-0 py-2 px-6 focus:outline-none ml-6 my-2 mx-2 hover:bg-pink-600 rounded">CheckOut</button>
            <button className="text-white ml-auto text-white bg-purple-400 border-0 py-2 px-6 focus:outline-none ml-4 my-2 mx-2 hover:bg-pink-600 rounded">Clear</button>
          </ol>
        </div>
    </div>
  )
}

export default Navbar