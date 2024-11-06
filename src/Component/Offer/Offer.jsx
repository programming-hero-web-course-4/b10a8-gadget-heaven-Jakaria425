import Banner from "../Banner/Banner";
import { getDiscount } from "../../Utiliti/storage";
import { useState, useEffect } from "react";



const Offer = () => {
    useEffect(()=>{
        document.title = "Offer | GadgetHeaven"
    },[])
    const handelDiscount = (value) => {
        getDiscount(value)
    }
    return (
        <div className="pt-24">
            <div className="bg-[#9538E2] rounded-2xl h-[500px]">
                <div className="text-white flex flex-col items-center">
                    <h1 className="text-6xl font-bold my-3">Gadget Heaven</h1>
                    <h3 className="text-3xl my-3">Leading the way in cutting-edge technology and innovation.</h3>
                </div>
                <div className="divider"></div>
                <h1 className="text-3xl text-center mb-7">Collect Discount voucher</h1>
                <div className="flex justify-center items-center gap-4">
                    <h1 className="text-lg pt-1 h-10 gap-3 px-3 rounded-xl bg-[#cb8bff]"> 10% </h1>
                    <button onClick={handelDiscount(10)} className="h-10 gap-3 px-3 rounded-xl bg-[#cb8bff] hover:bg-[#eed8ff]">Collect</button>
                </div>
                <div className="flex justify-center my-5 items-center gap-4">
                    <h1 className="text-lg pt-1 h-10 gap-3 px-3 rounded-xl bg-[#cb8bff]"> 15% </h1>
                    <button onClick={handelDiscount(15)} className="h-10 gap-3 px-3 rounded-xl bg-[#cb8bff] hover:bg-[#eed8ff]">Collect</button>
                </div>
                <div className="flex justify-center items-center  gap-4">
                    <h1 className="text-lg pt-1 h-10 gap-3 px-3 rounded-xl bg-[#cb8bff]"> 18% </h1>
                    <button onClick={handelDiscount(18)} className="h-10 gap-3 px-3 rounded-xl bg-[#cb8bff] hover:bg-[#eed8ff]">Collect</button>
                </div>



            </div>

        </div>
    );
};

export default Offer;