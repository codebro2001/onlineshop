
import logo from '../assets/logo.png'
import { useState } from 'react'
import basket from '../assets/basket.png'
import profile from '../assets/profile.png'
import union from '../assets/Union.png'
import trash from '../assets/trash-can.png'
export default function Header({cart, removeCart}) {
   const [active, setActive] = useState(false)

  

    return (
        <>
            <div className="bg-[#E7D4B5] md:flex md:justify-between md:h-[74px] items-center px-[126px]">
                <img  className='w-[70px] h-[44px]' src={logo} alt="" />

                <div className='flex justify-between w-[141px] items-center relative' >
                    <div className='w-[20px] bg-[#baa37e] h-[20px]  rounded-full absolute left-[-10px] top-[-10px] flex justify-center items-center '>
                            {
                                 <p className='text-white font-bold'>{cart.length}</p>
                                
                            }
                    </div>
                    <img onClick={() => setActive(!active)} className='cursor-pointer w-[24px] h-[24px]' src={basket} alt="" />
                    <img className='w-[40px] h-[40px]'  src={profile} alt="" />
            
                    <div className={` absolute   ${active ? "block" : "hidden"}   top-[60px] right-[90px] w-[233px] bg-[#E7D4B5] bg-no-repeat h-auto`}   >
                        {
                            cart.map((item) => {
                                return (
                                    <div className='flex items-center gap-x-3  border-red-500 border-2'>
                                        <img className='w-[60px] h-[60px]' src={item.image} alt="" />   
                                       <div className='text-[#876161] font-bold'>
                                        <p >{item.name}</p>
                                        <p>{item.price}</p>

                                       </div>
                                       <button onClick={() => removeCart(item)}> <img className='w-[24px] h-[24px]' src={trash} alt="" /></button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        
        </>

       )
}