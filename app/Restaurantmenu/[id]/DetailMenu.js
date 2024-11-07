import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";

export default function DetailMenu({ itemCards }) {
    const imgVeg = "https://packagingguruji.com/wp-content/uploads/2022/09/Veg-Logo-2.png"
    const imgNonVeg = "https://packagingguruji.com/wp-content/uploads/2022/09/Old-Non-Veg-Logo.png"
    return (
        <>

            <div className='my-5  '>
                {itemCards.map(({ card: { info: { name, price, defaultPrice, itemAttribute: { vegClassifier }, ratings: { aggregatedRating: { rating, ratingCountV2 } }, description = "", imageId } } }, i) => {
                    const [isMore, setisMore] = useState(false);
                    const trimDes = description.substring(0, 170)

                    return (
                        <div key={i}>

                            <div className='flex justify-between py-1'>
                                <div >
                                    <img className='ml-[-8px] mb-[-5px] w-10 h-10' src={vegClassifier === "VEG" ? imgVeg : imgNonVeg} alt="" />
                                    <h1 className='font-bold  pb-1 text-[20px]'>{name}({itemCards.length})</h1>
                                    {price ?
                                        <p className='font-semibold  text-[20px] '> <span>₹</span> {(price) / 100} </p> : <p className='font-semibold  text-[20px] '> <span>₹</span> {(defaultPrice) / 100} </p>}
                                    <div>
                                        {<p className='flex font-medium w-[80%] items-center text-[15px] mb-2'><FaStar className='text-green-500 mr-2' /><span className='text-green-500'>{rating}</span><span className='text-gray-600'>({ratingCountV2 ? ratingCountV2 : "No Ratings"})</span></p>
                                        }
                                        <p className=' text-gray-600 font-semibold '>{isMore ? (description) : (trimDes)}</p>
                                        {description.length > 170 && <button className='font-bold' onClick={() => setisMore(!isMore)}>{isMore ? `less` : `more `}</button>}
                                    </div>

                                </div>
                                <div className='w-[156px]   object-cover aspect-video min-h-[200px] relative'>
                                    <img className=' rounded-2xl mt-4 h-[156px] w-[156px]' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`} alt='' />
                                    <button className='bg-white font-bold text-green-500 px-7 py-1 rounded left-8 bottom-6  border-2 absolute'>ADD</button>
                                </div>

                            </div>

                            <hr className=' w-full h-1' />

                        </div>

                    )
                })}

            </div>

        </>
    )
}
