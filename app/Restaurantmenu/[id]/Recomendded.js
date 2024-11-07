import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import DetailMenu from './DetailMenu';

export default function Recomendded({ card }, i) {

    const [index, setindex] = useState(card["@type"] ? true : false)

    const ToggleFunction = () => {

        setindex(prev => !prev)

    }


    if (card.itemCards) {

        const { title, itemCards } = card;

        return (
            <>
                <div key={i} className='mt-8'>

                    <div className='flex justify-between mb-10 w-full font-bold text-xl'>
                        <h1  >{title}</h1>
                        <div className='hover:cursor-pointer' onClick={ToggleFunction}>{index === true ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                    </div>
                    <div>{index == false && <hr className={`${card["@type"] ? `my-4 border-[10px]` : `my-2 border-[1px]`}`} />}</div>
                    {
                        index && <DetailMenu itemCards={itemCards} />

                    }
                </div>



            </>
        )



    }

    else {

        const { categories, title } = card;

        return (
            <>

                <h1 className='font-bold py-2 text-gray-700 text-xl'>
                    {title}
                </h1>
                <div>
                    {categories.map((card) => (
                        <div >

                            <Recomendded card={card} />
                        </div>

                    ))}
                </div>
            </>

        )
    }


}
