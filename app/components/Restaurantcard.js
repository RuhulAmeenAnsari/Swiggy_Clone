import React from 'react'
import { MdStars } from 'react-icons/md'
import { GoDotFill } from 'react-icons/go'
import Link from 'next/link'

export default function Restaurantcard(info) {
    // console.log(info);
    // console.log(info.link.split("/").at(-1));
    return (


        <> <Link href={`Restaurantmenu/${info?.link?.split("/").at(-1)}`}  >

            <div className='min-w-[250px] h-[200px] relative'>
                <img className='  rounded-2xl object-cover aspect-video h-full' src={`https://media-assets.swiggy.com/swiggy/image/upload/${info?.cloudinaryImageId}`} alt="" />
                <div className=' bg-gradient-to-t from-black from-1% to-transparent to-40% w-full h-full absolute top-0 rounded-2xl '></div>

                <p className='absolute bottom-2 text-white text-[20px] font-bold ml-3'>{info?.aggregatedDiscountInfoV3?.header ? info?.aggregatedDiscountInfoV3?.header + " " + info?.aggregatedDiscountInfoV3?.subHeader : ""}</p>
            </div>
            <div className='ml-2 mt-3 text-sm font-thin  '>
                <p className='text-[15px] font-bold mb-2'>{info?.name}</p>
                <p className='flex items-center font-medium  text-[15px] mb-2'> <MdStars className="text-green-500 items-center text-[25px] mr-2" />{info?.avgRating} <span className="ml-2 flex items-center font-semibold"><GoDotFill />  {info?.sla?.slaString}</span></p>
                <p className='text-gray-600 font-medium mb-1 line-clamp-1' >{info?.cuisines.join(",")} </p>
                <p className='text-gray-600 font-medium '>{info?.locality}</p>
            </div>
        </Link>

        </>
    )
}
