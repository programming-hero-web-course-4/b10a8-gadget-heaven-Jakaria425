import { Outlet, useLoaderData } from "react-router-dom";
import Nav from '../Nav/Nav';
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";


const Home = () => {
    const products = useLoaderData()
    useEffect(()=>{
        document.title = "Home | GadgetHeaven"
    },[])
    return (
        <div className="box-border relative max-w-[1540px] mx-auto mt-o z-[1]">

            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;