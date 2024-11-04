import { Outlet, useLoaderData } from "react-router-dom";
import Nav from '../Nav/Nav';
import Footer from "../Footer/Footer";
import HomeContainer from "../ProductContainer/ProductContainer";

const Home = () => {
    const products = useLoaderData()
    return (
        <div className="max-w-[1540px] mx-auto mt-o">
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;