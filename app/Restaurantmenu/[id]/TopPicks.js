import React from 'react'
export default function TopPicks({ data }) {


    return (


        <>
            <div className='flex gap-3' >
                {data.map((item, i) => (


                    <div key={i} className='w-[300px] relative rounded-md gap-3 h-auto'>

                        <img className='w-[266px] h-auto ' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/${item.creativeId}`} alt="" />
                        <div className='ml-5 absolute z-1 items-center gap-24 bottom-8 flex'>
                            <p className='text-white font-semibold'> <span>₹</span>   {(item?.dish?.info?.price) ? (item?.dish?.info?.price) / 100 : (item?.dish?.info?.defaultPrice) / 100} </p>
                            <button className=' bg-white text-green-500 px-7 font-bold py-1 rounded  border-2'>ADD</button>

                        </div>

                    </div>
                ))}
            </div>
        </>
    )

}