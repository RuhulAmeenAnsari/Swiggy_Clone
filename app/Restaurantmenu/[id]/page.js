"use client"
import TopPicks from './TopPicks';
import axios from 'axios';
import Discount from './Discount';
import { CiSearch } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { MdStars } from 'react-icons/md'
import Recomendded from './Recomendded';

export default function page() {
    const [RestMenu, setRestMenu] = useState([])
    const [RestDetails, setRestDetails] = useState([]);
    const [Discountdata, setDiscountdata] = useState([])
    const [RecomenddedData, setRecomenddedData] = useState([])


    const [scrolldeals, setscroll] = useState(0)
    const [scrolltp, setscrolltp] = useState(0)
    const [Toppicks, setToppicks] = useState([])


    function handletpprev() {
        scrolltp == 0 ? "" : setscrolltp((prev) => (prev - 25))
    }
    function handletpnext() {
        scrolltp < 50 ? setscrolltp((next) => (next + 25)) : ""

    }






    function handleprev() {
        scrolldeals == 0 ? "" : setscroll((prev) => (prev - 100))
    }
    function handlenext() {

        scrolldeals < 300 ? setscroll((next) => (next + 100)) : ""
    }
    function handletpprev() {
        scrolltp == 0 ? "" : setscrolltp((prev) => (prev - 25))
    }
    function handletpnext() {
        scrolltp < 75 ? setscrolltp((next) => (next + 25)) : ""

    }



    let { id } = useParams()

    let main;
    // main = id.match(/\d+/g).join("")

    main = (id.split("-").at(-1)).split("").filter(char => !isNaN(char)).join("")
    //first split the id(full link) into array and access the element
    //then again split the last element into a array and filter the text so that all alphabetical value get removed
    // then join the array into string

    const fetchAPI = async () => {
        const API = await axios.get(`https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.87560&lng=80.91150&restaurantId=${main}&catalog_qa=undefined&submitAction=ENTER`)
        const data = API.data;


        // setting all the Restaurant Details

        setRestMenu(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card) //All details of Menu lie here
        setRestDetails(data?.data?.cards[2]?.card?.card?.info)//All details of restaurant lie here
        setDiscountdata(data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers)//All details of Discount lie here
        setToppicks(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel)
        // const newdata = (data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter((item) => item?.card?.card?.carousel)
        // console.log(newdata);
        let actualData = (data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter((item) => item?.card?.card?.itemCards || item?.card?.card?.categories)

        setRecomenddedData(actualData)

    }



    useEffect(() => {
        fetchAPI()
    }, [])


    return (
        <>

            <div className='w-[800px] m-auto h-[8549px] mt-6 '>

                <p className='ml-2 text-[8px] text-gray-400 '><Link href="/"><span className='hover:cursor-pointer hover:text-gray-700'>Home</span> / <span className='hover:cursor-pointer hover:text-gray-700'>{RestDetails.city}</span></Link> / <span className='hover:cursor-pointer text-gray-700' >{RestDetails.name}</span></p>
                <div>
                    <div className='mt-6 mb-6 font-bold ml-[10px] text-3xl '>{RestDetails.name}</div>
                    <div className='w-[800px] rounded-[30px] pb-4 px-3 flex justify-center items-center h-[210px] bg-gradient-to-b from-white to-gray-300'>
                        <div className='w-[768px]  rounded-[30px]  items-center  border-2 h-[180px] bg-white'>
                            <p className='flex items-center text-sm pt-3 px-2 font-bold'><span><MdStars className="text-green-500 items-center text-[18px] mr-2" /></span>{RestDetails.avgRating}  <span className='mx-2'> ({RestDetails.totalRatingsString})</span> <span className='mb-[9px] font-bold text-2xl mx-2 items-center'>.</span> <span>{RestDetails.costForTwoMessage}</span></p>
                            <p className='ml-8 text-orange-400 text-sm underline font-bold '>{RestDetails?.cuisines?.join(' , ')}</p>
                            <div className='flex text-sm mb-4'>
                                <div className='mt-4  ml-3'>
                                    <div className="h-[8px] w-[8px]  rounded bg-black opacity-40"></div>
                                    <div className=' ml-[3px] w-[1px] h-[20px] bg-black opacity-40'></div>
                                    <div className="h-[8px] w-[8px] rounded bg-black opacity-40"></div>
                                </div>
                                <div className=''>
                                    <h1 className='ml-6 mt-2 font-bold' >Outlet <span className='ml-4 mt-2 font-semibold opacity-80'>{RestDetails.areaName}</span></h1>
                                    <h1 className='ml-6 mt-1 font-semibold'> {RestDetails?.sla?.slaString}</h1>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <div className="w-[800px] ml-5 m-auto flex justify-between mt-5">
                            <h3 className="font-bold text-3xl">Deals For You</h3>
                            <div className='flex gap-4 mr-10 '>
                                <div onClick={handleprev} className={`  rounded-full  hover:cursor-pointer p-3 ` + (scrolldeals <= 0 ? "bg-gray-100" : "bg-gray-400")}>< FaArrowLeft className='text-sm' /></div>
                                <div onClick={handlenext} className={` rounded-full hover:cursor-pointer p-3 ` + (scrolldeals > 200 ? "bg-gray-100" : "bg-gray-400")}>< FaArrowRight className='text-sm' /></div>
                            </div>
                        </div>
                        <div className=' w-full gap-3 flex overflow-x-hidden hide-scroll-bar  mt-8 rounded-3xl'>
                            {
                                Discountdata.map((data, i) => (
                                    <div key={i} style={{ translate: `-${scrolldeals}%` }} className='duration-500 ' >
                                        <Discount data={data} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className='w-full text-center mt-8'>MENU</h1>
                    <div className='w-full bg-gray-300 justify-center flex items-center rounded-xl font-semibold hover:cursor-pointer mt-4 relative text-center h-[48px]'>Search for dishes <CiSearch className='absolute right-3' /></div>
                </div>

                <hr className="w-full mt-10 mx-auto" />

                {Toppicks && <div>

                    <div className="w-[800px] ml-5 m-auto flex justify-between mt-5">
                        <h3 className="font-bold text-3xl">Top Picks</h3>
                        <div className='flex gap-4 mr-10 '>
                            <div onClick={handletpprev} className={`  rounded-full  hover:cursor-pointer p-3 ` + (scrolltp <= 0 ? "bg-gray-100" : "bg-gray-400")}>< FaArrowLeft className='text-sm' /></div>
                            <div onClick={handletpnext} className={` rounded-full hover:cursor-pointer p-3 ` + (scrolltp > 50 ? "bg-gray-100" : "bg-gray-400")}>< FaArrowRight className='text-sm' /></div>
                        </div>
                    </div>
                    <div className='w-full gap-3 flex overflow-x-hidden hide-scroll-bar duration-300  px-3 mt-8 ' >
                        {(
                            <div className='duration-300 ' style={{ translate: `-${scrolltp}%` }}> <TopPicks data={Toppicks} /></div>
                        )}
                    </div>
                    <hr className="w-full mt-10 mx-auto" />
                </div>}



                <div className='h-auto'>
                    {RecomenddedData.map(({ card: { card } }, i) => (
                        <div>
                            {console.log(card)}
                            <Recomendded key={i} card={card} />
                        </div>
                    ))}
                </div>

            </div>

        </>
    )

}
