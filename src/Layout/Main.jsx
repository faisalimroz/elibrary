import { Outlet } from "react-router-dom";
import Footer from "../Page/Shared/Footer/Footer";
import Navbar from "../Page/Shared/Navbar/Navbar";
import Nav from "../Page/Shared/Nav/Nav";


const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>

    );
};

export default Main;