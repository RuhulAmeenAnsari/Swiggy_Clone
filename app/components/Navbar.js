"use client"

// import React, { useContext } from 'react'
import Link from 'next/link';
import { FaAngleDown } from "react-icons/fa";
import { IoBagRemoveOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { useContext, useState } from 'react';
import { MyContext } from '../context/Context';
import axios from 'axios';


export default function Navbar() {

    const { Visible, setVisible } = useContext(MyContext)
    const [searchResult, setsearchResult] = useState([])

    async function Search(val) {
        if (val === "") return
        const API = await axios.get(`https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/misc/place-autocomplete?input=${val}`)
        const response = API.data;
        const result = response.data;
        setsearchResult(result)

    }



    function handleVisibility() {
        setVisible((value) => {
            const newVal = !value;
            document.body.style.overflow = newVal ? "hidden" : "auto";
            return newVal
        })
    }

    return (
        <>
            <div className='sticky z-30 bg-white top-0 '>

                <div className="relative w-full">
                    <div onClick={handleVisibility} className={'absolute bg-black/50 z-40 min-h-screen w-full transition-opacity duration-500 ' + (Visible ? 'opacity-100' : 'opacity-0 invisible')}></div>
                    <div className={'bg-white z-50 flex justify-center absolute min-h-screen w-[40%] transition-transform duration-500  ' + (Visible ? 'translate-x-0' : '-translate-x-full')} >
                        <p onClick={handleVisibility} className=" absolute z-20 mt-10 left-40 text-center text-gray-600 text-[35px] cursor-pointer p-4"><IoMdClose /></p>
                        <div className='flex flex-col'>
                            <input type="text" placeholder=' Search for Area, Street name..' onChange={(e) => Search(e.target.value)} className=' shadow-lg ml-10 w-[20vw] border-2 h-9 mt-[120px]' />
                            <div className='w-[22.5vw] '>
                                <ul>
                                    {searchResult.map((data, i) => (
                                        <div className='line-clamp-2  mt-2 ml-10 border-2 p-5'>
                                            <li className='text-[14px] flex text-center font-semibold cursor-pointer hover:text-orange-600 hover:scale-105 items-center gap-2 ' key={i}><CiLocationOn />{data.structured_formatting.main_text} </li>
                                            <p className='opacity-55 ml-5 text-sm'>{data.structured_formatting.secondary_text}</p>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='w-full h-[12vh] z-10 sticky shadow flex  items-center justify-center '>
                    <div className='w-[80%]  flex justify-between px-[10px]'>
                        <div className='items-center flex w-[40vw] group '>
                            <Link href="/"> <img className='w-[9
                            vw] h-[5vh]  hover:text-orange-400 group-hover:font-bold group-hover:scale-110 transition-transform duration-300 hover:cursor-pointer ' src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png" alt="" /></Link>
                            <div onClick={handleVisibility} className='items-center flex cursor-pointer'>
                                <p className='text-[2.2vh] border-b-2 border-zinc-900 font-bold mx-5  hover:text-orange-400 hover:cursor-pointer hover:scale-110'>Other</p>
                                <FaAngleDown className='mt-[3px] ml-[4px]  hover:text-orange-800 hover:cursor-pointer hover:scale-110 text-orange-500' />

                            </div>
                        </div>
                        <div className='flex gap-10 w-[60vw]'>
                            <li className='list-none flex gap-2 items-center group'>
                                <p className='text-[2.2vh] flex gap-1.5 hover:text-orange-400 items-center hover:cursor-pointer hover:font-semibold'>
                                    <IoBagRemoveOutline className=' text -xs  hover:text-orange-400 group-hover:font-bold group-hover:scale-110 transition-transform duration-300 hover:cursor-pointer' />
                                    Swiggy Corporate</p>
                            </li>
                            <li className='list-none gap-2 flex items-center group'>
                                <p className='text-[2.2vh] gap-1.5 items-center hover:text-orange-400 hover:cursor-pointer flex hover:font-semibold'>
                                    <CiSearch className=' text -xs hover:text-orange-400 group-hover:font-bold group-hover:scale-110 transition-transform duration-300 hover:cursor-pointer' />
                                    Search</p>
                            </li>
                            <li className='list-none gap-2 flex items-center group '>
                                <p className=' items-center text-[2.2vh] gap-1.5 hover:text-orange-400 flex hover:cursor-pointer'>
                                    <CiDiscount1 className=' text -xs hover:text-orange-400  group-hover:font-bold group-hover:scale-110 transition-transform duration-300 hover:cursor-pointer' />
                                    Offer</p>
                            </li>
                            <li className='list-none gap-2 flex items-center group '>
                                <p className=' items-center text-[2.2vh] gap-1.5 hover:text-orange-400 hover:cursor-pointer flex'> <IoMdHelpCircleOutline className=' text -xs hover:text-orange-400  group-hover:font-bold group-hover:scale-110 transition-transform duration-300 hover:cursor-pointer' />Help</p>
                            </li>
                            <li className='list-none gap-2 flex items-center group '>
                                <p className=' items-center text-[2.2vh] gap-1.5 hover:text-orange-400 flex hover:cursor-pointer'>
                                    <CiUser className=' text -xs hover:text-orange-400  group-hover:font-bold group-hover:scale-110 transition-transform duration-300 hover:cursor-pointer' />
                                    Sign In</p>
                            </li>
                            <li className='list-none gap-2 flex items-center group'>
                                <p className='items-center text-[2.2vh] gap-1.5 hover:text-orange-400 flex hover:cursor-pointer'>
                                    <CiShoppingCart className=' text -xs hover:text-orange-400  group-hover:font-bold group-hover:scale-110 transition-transform duration-300 hover:cursor-pointer' />
                                    Cart</p>
                            </li>

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
