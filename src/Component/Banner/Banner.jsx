import img from '../../assets/image/banner.jpg'

const Banner = () => {
    return (
        <div className="relative pt-5 h-[1000px] md:h-[1150px]">
            <div className="bg-[#9538E2] rounded-2xl h-[700px] pt-[100px]">
                <div className="flex flex-col justify-center text-white text-center w-[70%] mx-auto">
                    <h1 className="text-[32px] md:text-[40px] lg:text-[56px]  font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="w-[70%] mx-auto mt-6">Explore the latest gadgets that will take your experience to the next 
                        level. From smart devices to the coolest accessories, we have it all!</p>
                        <div>
                            <button className=" mt-4 px-5 py-2 rounded-3xl bg-white text-black">Shop Now</button>
                        </div>
                        
                </div>
            </div>
            <div className="mx-auto max-w-[1000px] h-[560px] relative">
                <div className="absolute -top-40 lg:-top-64 border-[3px] border-[#ffff] rounded-xl bg-[#0e000069] ">
                    <div className=' box-border max-w-[1000px] lg:w-[1000px] p-6 max-h-[560px] md:h-[560px]'>
                        <div className='box-border max-w-[1000px] h-full'>
                        <img className="w-full rounded-xl h-full" src={img} alt="" />
                    </div>
                    </div>
                    
                </div>

            </div>
            
        </div>
    );
};

export default Banner;