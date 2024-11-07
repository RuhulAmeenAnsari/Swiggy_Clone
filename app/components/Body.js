"use client"
import { useState, useEffect } from "react";
import axios from 'axios';
import Highlights from "./Highlights";
import Toprestaurant from "./Toprestaurant";
import Onlinedelivery from "./Onlinedelivery";




export default function Body() {
    const [TopRestaurantdata, setTopRestaurantdata] = useState([])
    const [highlightsData, sethighlightsData] = useState([])

    const fetchAPI = async () => {
        const API = await axios.get("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const res = API.data
        setTopRestaurantdata(res.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        sethighlightsData(res?.data?.cards[0]?.card?.card?.imageGridCards?.info)

    }
    useEffect(() => {
        fetchAPI()
    }, [])

    return (
        <div className='w-full'>

            <div className='  text-3xl mx-auto font-bold w-[85%] overflow-x-hidden  mt-3'>

                <Highlights data={highlightsData} />
                <hr className="w-[85%] mx-auto" />
                <Toprestaurant data={TopRestaurantdata} />
                <hr className="w-[85%] mx-auto" />
                <Onlinedelivery data={TopRestaurantdata} />

            </div>

        </div>

    )
}
