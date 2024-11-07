import React from 'react'
import Restaurantcard from './Restaurantcard'

export default function Onlinedelivery({ data }) {
    // console.log(data);
    return (

        <>
            <div className="w-[85%]  m-auto flex justify-between mt-10">
                <h5 className='text-2xl'>Restaurants with online food delivery in Lucknow</h5>


            </div>
            <div className="w-[85%] mx-auto gap-5 overflow-x-auto hide-scroll-bar flex-wrap flex mt-3  ">
                {data.map(({ info, cta: { link } }, i) => (
                    <div key={i} style={{ translate: `-${scroll}%` }} className='hover:scale-90 duration-300  cursor-pointer mr-12 w-[200px] '>
                        <Restaurantcard {...info} link={...link} />
                    </div>
                ))}
            </div>

        </>
    )
}
