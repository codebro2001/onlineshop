export default function Products({filter, filterinput, addtoCart}) {
    return (
        <>
            <div className="grid grid-cols-4 gap-4 mx-[126px] my-20 ">
                {
                    filterinput.map((item) => {
                        return (
                            <div className="w-[300px]  rounded-2xl   h-[350px] font-bold text-[#876161] bg-[#E7D4B5]">
                                <img className="w-full" src={item.image} alt="" />
                                <p className="mx-5">{item.name} </p>
                                <p className="mx-5">{item.price} $</p>
                                <button onClick={() => addtoCart(item)} className=" my-5 bg-[#876161] text-white w-[216px] mx-10 rounded-md h-7 " >Add to cart</button>

                            </div>
                        )
                    })
                }
             
            </div>
        </>
        
    )

}