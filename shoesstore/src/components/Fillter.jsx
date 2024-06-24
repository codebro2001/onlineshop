import drop from '../assets/drop.png'
import search from '../assets/searchcion.png'
import { useState } from 'react'
export default function Fillter({men, women, setValue, value, all}) {
   const [active, setActive] = useState(false)
   
    return (    
        <>
            <div className="  mx-[126px] mt-10 h-12 flex relative ">
                <input onChange={(event) => setValue(event.target.value)} className="w-full  px-12 bg-[#D9D9D9 ] bg-[#D9D9D9] text-[#876161]"  type="text" placeholder="search..." />
                <button onClick={() => setActive(!active)} className=" w-[199px] bg-[#876161]  text-white">Fillter</button>
                <img className="absolute right-3 top-3" src={drop} alt="" />
                <img className="absolute left-3 top-3" src={search} alt="" />
                <div className={`  ${active ? "block" : "hidden"} absolute w-[172px]  right-0 top-[50px] flex flex-col shadow-xl shadow-[#c7b4b4] gap-y-2`}>
 
                     <button onClick={men} className=" border-l-4 h-12 hover:border-red-300 hover:bg-[#876161]  bg-white hover:text-white">Men</button>
                     <button onClick={women} className=" border-l-4 h-12 hover:border-red-300 hover:bg-[#876161]  bg-white  hover:text-white">Women</button>
                     <button className=" border-l-4 h-12 hover:border-red-300 hover:bg-[#876161]  bg-white  hover:text-white" onClick={all}>All</button>
                </div>
            </div>
        </>
    )
}