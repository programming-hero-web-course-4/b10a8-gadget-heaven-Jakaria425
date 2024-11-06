import FooterContent from "../FooterContent/FooterContent";


const Footer = () => {
    return (
        <div className="lg:px-[130px] px-[30px] md:py-[70px] py-[100px] flex flex-col items-center">
            <div className="flex flex-col items-center">
                <h1 className="text-5xl my-3">Gadget Heaven</h1>
                <h3 className="text-2xl my-3">Leading the way in cutting-edge technology and innovation.</h3>
            </div>
            <div className="divider"></div>
            <div>
                <FooterContent></FooterContent>
            </div>
        </div>
    );
};

export default Footer;