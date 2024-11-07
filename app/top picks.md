import TopPicks from './TopPicks';

under fetch -> {setToppicks(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
console.log(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)}

top picks component ->
import React from 'react'

export default function TopPicks({ data }) {

    return (
        <>
            <div className='flex gap-3'>
                {data.map((item, i) => (
                    <div key={i} className='w-[246px] rounded-md gap-3 h-[253px]'>

                        <img className='w-[246px] h-[253x]' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/" + item.
                            creativeId} alt="" />


                    </div>
                ))}
            </div>
        </>
    )

}

    function handletpprev() {
        scrolltp == 0 ? "" : setscrolltp((prev) => (prev - 25))
    }
    function handletpnext() {
        scrolltp < 50 ? setscrolltp((next) => (next + 25)) : ""

    }

     const [scrolltp, setscrolltp] = useState(0)
    const [Toppicks, setToppicks] = useState([])


     <div>

                    <div className="w-[800px] ml-5 m-auto flex justify-between mt-5">
                        <h3 className="font-bold text-3xl">Top Picks</h3>
                        <div className='flex gap-4 mr-10 '>
                            <div onClick={handletpprev} className={`  rounded-full  hover:cursor-pointer p-3 ` + (scrolltp <= 0 ? "bg-gray-100" : "bg-gray-400")}>< FaArrowLeft className='text-sm' /></div>
                            <div onClick={handletpnext} className={` rounded-full hover:cursor-pointer p-3 ` + (scrolltp >= 50 ? "bg-gray-100" : "bg-gray-400")}>< FaArrowRight className='text-sm' /></div>
                        </div>
                    </div>
                    <div className='w-full gap-3 flex overflow-x-hidden hide-scroll-bar duration-300  px-3 mt-8 ' >
                        {Toppicks && Array.isArray(Toppicks) && Toppicks.length > 0 ? (
                            <TopPicks data={Toppicks} />
                        ) : (
                            <p>No top picks available</p>
                        )}

                    </div>
                </div>
