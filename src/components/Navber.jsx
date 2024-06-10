import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaBars, FaSearch, FaUser   } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa6";
import img from "../assets/cart.png"
import { RxCross2 } from "react-icons/rx";

const Navber = () => {
    let[cartshow, setCartShow] = useState(false)
    let[accountshow, setAccountShow] = useState(false)
    let[usershow, setUserShow] = useState(false)
    
    let cartref = useRef()
    let accountref = useRef()
    let userref = useRef()

    useEffect(()=>{
        document.addEventListener("click", (e)=>{
          if(cartref.current.contains(e.target) == true ){
            setCartShow(!cartshow)
          }else{
            setCartShow(false)
          }
          if(accountref.current.contains(e.target) == true){
            setAccountShow(!accountshow)
          }else{
            setAccountShow(false)
          }
          if(userref.current.contains(e.target) == true){
            setUserShow(!usershow)
          }else{
            setUserShow(false)
          }
        })
    },[cartshow, accountshow, usershow])
  return (
    <section className=' bg-[#F5F5F3] py-5'>
        <Container>
            <Flex className=" items-center">
                <div className=" w-[30%] z-50 relative left-[60px]">
                    <div ref={cartref} className=" flex gap-x-4 items-center">
                    <FaBars />
                    <h2 className=' font-sans font-bold text-[16px] hidden lg:block lg:text-[#767676] text-white hover:text-[#262626]'>Shop by Category</h2>
                    </div>
                    {cartshow &&
                    <div className=" absolute top-[50px] left-0 bg-[#262626] w-[250px] ">
                        <ul className=' py-4 '>
                            <li className='text-[rgba(255,255,255,0.7)] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6 hover:text-white'>Accesories</li>
                            <li className='text-[rgba(255,255,255,0.7)] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6 hover:text-white'>Furniture</li>
                            <li className='text-[rgba(255,255,255,0.7)] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6 hover:text-white'>Electronics</li>
                            <li className='text-[rgba(255,255,255,0.7)] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6 hover:text-white'>Clothes</li>
                            <li className='text-[rgba(255,255,255,0.7)] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6 hover:text-white'>Bags</li>
                            <li className='text-[rgba(255,255,255,0.7)] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6 hover:text-white'>Home appliances</li>
                        </ul>
                    </div>
                        }
                </div>
                <div className=" w-[40%]">
                    <div className=" relative">
                        <input placeholder='search...' type="search" className=' w-full h-[50px] border-2 border-[#262626] outline-none px-4 '/>
                        <div className=" absolute top-[50%] right-4 translate-y-[-50%]">
                            <FaSearch />
                        </div>
                    </div>
                </div>
                <div className=" w-[30%]">
                  <div className=" flex justify-end gap-x-4">
                  <div ref={accountref} className=" flex relative">
                    <FaUser />
                    <IoMdArrowDropdown />
                    </div>
                    {accountshow &&
                    <div className=" absolute z-50 top-[170px] lg:right-[180px] bg-[#262626] w-[200px] py-[10px]">
                        <div className=" text-center">
                            <h2 className='text-[rgba(255,255,255,0.7)] font-sans font-bold text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6  hover:text-white'>My Account</h2>
                        </div>
                        <div className=" px-4">
                            <h4 className='text-[rgba(255,255,255,0.7)] font-sans font-semibold text-[16px] duration-300 ease-in-out pl-3 hover:pl-6  hover:text-white'>Log In</h4>
                            <h4 className='text-[rgba(255,255,255,0.7)] font-sans font-semibold text-[16px] duration-300 ease-in-out pl-3 hover:pl-6  hover:text-white'>Log Out</h4>
                        </div>
                    </div>
                    }
                   
                    <div ref={userref} className=" relative">
                    <FaCartArrowDown />
                    </div>
                    {usershow &&
                    <div className=" absolute z-50 top-[170px] lg:right-[170px] w-[300px] bg-[#262626]">
                       <div className=" py-4">
                       <div className=" flex justify-around items-center">
                       <div className="">
                            <img src={img} alt="img" />
                        </div>
                        <div className="">
                        <h3 className='text-[rgba(255,255,255,0.7)] hover:text-white'>Black Smart Watch</h3>
                        <h5 className='text-[rgba(255,255,255,0.7)] hover:text-white'>$44.00</h5>
                        </div>
                        <div className="">
                        <RxCross2 className=' text-white'/>
                        </div>
                       </div>
                       <div className="">
                       <h2 className=' pl-3 py-3 text-[rgba(255,255,255,0.7)] hover:text-white'>Subtotal: <span>$44.00</span></h2>
                        <div className=" flex justify-around">
                            <div className="">
                            <a className=' w-[130px] h-[40px] border-2 border-[#fff] inline-block text-center leading-[40px] text-[rgba(255,255,255,0.7)] hover:text-white' href="#">View Cart</a>
                            </div>
                            <div className="">
                            <a className=' w-[130px] h-[40px] border-2 border-[#fff] inline-block text-center leading-[40px] text-[rgba(255,255,255,0.7)] hover:text-white' href="#">View Cart</a>
                            </div>
                        </div>
                        
                       </div>
                       </div>
                    </div>
                    }
                  </div>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Navber