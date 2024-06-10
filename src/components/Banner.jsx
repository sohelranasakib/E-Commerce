import React from 'react'
import banner from "../assets/bannerimg.png"
import Slider from "react-slick";
import Container from './Container';
import Flex from './Flex';
import { FaTruck } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
     
        arrows: false,
        appendDots: dots => (
          <div
            style={{
              
              borderRadius: "10px",
              padding: "10px",
              position: "absolute",
              left: "70px",
              top: "50%",
              transform: "translateY(-50%)"

            }}
          >
            <ul style={{ margin: "0px" }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div className='ami'
            style={{
              width: "30px",
              color: "transparent",
              padding: "10px 0",
              borderRight: "4px #fff solid"
            }}
          >
            0{i + 1}
          </div>
        )
      };
  return (
    <>
    <Slider {...settings}>
    <div className="">
        <img src={banner} alt="" />
    </div>
    <div className="">
        <img src={banner} alt="" />
    </div>
    <div className="">
        <img src={banner} alt="" />
    </div>
    <div className="">
        <img src={banner} alt="" />
    </div>
    </Slider>
    <Container>
        <Flex className="justify-between lg:flex-wrap flex-wrap">
        <div className="">
            <h2 className='font-sans font-bold text-[16px]  lg:text-[#767676]  text-black'> <span className='pr-2 font-bold text-[22px] text-black'>2</span>Two years warranty</h2>
        </div>
        <div className="">
            <div className=" flex items-center gap-x-2">
            <FaTruck  className=' text-[22px]'/>
                <h2 className=' font-sans font-bold text-[16px] lg:text-[#767676]  text-black'>Free shipping</h2>
            </div>
        </div>
        <div className="">
            <div className=" flex items-center gap-x-2">
            <IoMdRefresh className=' text-[22px]'/>
                <h2 className=' font-sans font-bold text-[16px] lg:text-[#767676]  text-black'>Return policy in 30 days</h2>
            </div>
        </div>
        </Flex>
    </Container>
    </>
  )
}

export default Banner