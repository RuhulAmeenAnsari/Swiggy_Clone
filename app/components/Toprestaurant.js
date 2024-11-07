"use client"
import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Restaurantcard from "./Restaurantcard";
export default function Toprestaurant({ data }) {

    const [scroll, setscroll] = useState(0)



    function handleprev() {
        scroll == 0 ? "" : setscroll((prev) => (prev - 430))
    }
    function handlenext() {

        scroll <= 1680 ? setscroll((prev) => (prev + 430)) : ""
    }


    return (
        <>
            <div className="w-[85%] m-auto flex justify-between mt-10">
                <h5 className='text-2xl'>Top Restaurant Chains in Lucknow</h5>
                <div className='flex gap-4 mr-10 '>
                    <div onClick={handleprev} className={`  rounded-full  hover:cursor-pointer p-3 ` + (scroll <= 0 ? "bg-gray-100" : "bg-gray-400")}>< FaArrowLeft className='text-sm' /></div>
                    <div onClick={handlenext} className={` rounded-full hover:cursor-pointer p-3 ` + (scroll > 1680 ? "bg-gray-100" : "bg-gray-400")}>< FaArrowRight className='text-sm' /></div>
                </div>

            </div>
            <div className="w-[85%] mx-auto gap-5 overflow-x-auto hide-scroll-bar flex mt-3  ">
                {data.map(({ info, cta: { link } }, i) => (
                    <div key={i} style={{ translate: `-${scroll}%` }} className='hover:scale-90 duration-300 cursor-pointer  min-w-[250px] h-[400px]'>
                        <Restaurantcard {...info} link={...link} />
                    </div>
                ))}
            </div>

        </>
    )
}
