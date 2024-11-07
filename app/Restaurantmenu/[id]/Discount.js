import React from 'react'

export default function Discount({ data: { info: { header, description,
    offerLogo } } }) {

    return (
        <>
            <div className=' flex items-center w-[328px] gap-2 h-[75px] pl-4 border-2 rounded-3xl  '>
                <img className='h-14 mr-2 w-14' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/" + offerLogo} alt="" />
                <div className='text-[15px]   items-center font-bold'>
                    <h1>{header}</h1>
                    <p className='text-[12px]'>{description}</p>
                </div>
            </div>
        </>
    )
}
