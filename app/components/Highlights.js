"use client"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import React, { useState } from 'react'

export default function Highlights({ data }) {

    const [scroll, setscroll] = useState(0)

    function handleprev() {
        scroll == 0 ? "" : setscroll((prev) => (prev - 420))
    }
    function handlenext() {

        scroll <= 1260 ? setscroll((next) => (next + 420)) : ""
    }
    // console.log(data);
    return (
        <>
            <div className="w-[85%] m-auto flex justify-between mt-5">
                <h3>What's On Your mind?</h3>
                <div className='flex gap-4 mr-10 '>
                    <div onClick={handleprev} className={`  rounded-full  hover:cursor-pointer p-3 ` + (scroll <= 0 ? "bg-gray-100" : "bg-gray-400")}>< FaArrowLeft className='text-sm' /></div>
                    <div onClick={handlenext} className={` rounded-full hover:cursor-pointer p-3 ` + (scroll > 1260 ? "bg-gray-100" : "bg-gray-400")}>< FaArrowRight className='text-sm' /></div>
                </div>

            </div>
            <div className="w-[85%] mx-auto overflow-x-auto hide-scroll-bar flex mt-3  ">
                {data.map((item, i) => (
                    <img key={i} style={{ translate: `-${scroll}%` }} className='w-[120px] mx-[17px] duration-300  hover:cursor-pointer hover:scale-110 h-auto mb-4' src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`} alt="" />
                ))}
            </div>
        </>
    )
}
