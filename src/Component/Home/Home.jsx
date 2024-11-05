import { Outlet, useLoaderData } from "react-router-dom";
import Nav from '../Nav/Nav';
import Footer from "../Footer/Footer";

const Home = () => {
    const products = useLoaderData()
    return (
        <div className="box-border relative max-w-[1540px] mx-auto mt-o z-[1]">

            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;