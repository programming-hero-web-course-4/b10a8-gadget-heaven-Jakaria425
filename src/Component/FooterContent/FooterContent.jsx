

const FooterContent = () => {
    return (
        <div className="grid grid-cols-2 gap-14 md:grid-cols-3 md:gap-40 ">
            <div>
                <h3 className="mb-4 font-bold">Services</h3>
                <ul>
                    <li>Product Support</li>
                    <li>Order Tracking</li>
                    <li>Shipping & Delivery </li>
                    <li>Returns</li>
                </ul>
            </div>
            <div>
                <h3 className="mb-4 font-bold">Company</h3>
                <ul>
                    <li>About Us</li>
                    <li>Carer</li>
                    <li>Contact </li>
                    
                </ul>
            </div>
            <div>
                <h3 className="mb-4 font-bold">Legal</h3>
                <ul>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                </ul>
            </div>
            
        </div>
    );
};

export default FooterContent;