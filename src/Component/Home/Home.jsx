import { Outlet } from "react-router-dom";
import Nav from '../Nav/Nav';
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div className="max-w-[1440px] mx-auto mt-o bg-black pt-7">
            <Nav></Nav>
            <h1>this is home</h1>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;