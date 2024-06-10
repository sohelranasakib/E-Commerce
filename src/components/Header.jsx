import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import logo from "../assets/Logo.png"
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
    let [show, setShow] = useState(false)
  return (
    <section className=' h-[80px]'>
    <Container>
      <Flex className="justify-between items-center h-[80px] ">
      <div className=" w-[25%] px-2">
          <img src={logo} alt="" />
      </div>
      <div className=" w-[75%]">
          <ul className={`lg:flex justify-center z-50 gap-x-10 lg:static text-center absolute duration-700 ease-out ${show == true ? "bg-[green] top-[80px] left-0 w-full" : "top-[80px] left-[-200px]"}`}>
            <li className='font-sans font-bold text-[16px] lg:text-[#767676] text-white hover:text-[#262626]'>Home</li>
            <li className='font-sans font-bold text-[16px] lg:text-[#767676] text-white hover:text-[#262626]'>Shop</li>
            <li className='font-sans font-bold text-[16px] lg:text-[#767676] text-white hover:text-[#262626]'>About</li>
            <li className='font-sans font-bold text-[16px] lg:text-[#767676] text-white hover:text-[#262626]'>Contacts</li>
            <li className='font-sans font-bold text-[16px] lg:text-[#767676] text-white hover:text-[#262626]'>Journal</li>
          </ul>
      </div>
     <div className=" lg:hidden" onClick={()=>setShow(!show)}>
        {show == true ? <RxCross2 />:  <FaBars />}
     
     
     </div>
      </Flex>
    </Container>
    </section>
  )
}

export default Header