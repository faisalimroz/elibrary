import { Outlet,useLocation } from "react-router-dom";
import Footer from "../Page/Shared/Footer/Footer";
import Navbar from "../Page/Shared/Navbar/Navbar";
import Nav from "../Page/Shared/Nav/Nav";


const Main = () => {
    const location =useLocation();
    console.log(location)
    const noHeaderFooter =location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
         {noHeaderFooter || <Nav></Nav>}
        {noHeaderFooter || <Navbar></Navbar>}
         <Outlet></Outlet>
        {noHeaderFooter || <Footer></Footer>}
    </div>

    );
};

export default Main;