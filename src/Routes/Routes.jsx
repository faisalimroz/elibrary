import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Signup from "../Page/Home/Home/Signup/Signup";
import Login from "../Page/Home/Home/Login/Login";
import Contactus from "../Page/Home/Contactus/Contactus";
import Kids from "../Page/Home/Home/Kids/Kids";
import Fiction from "../Page/Home/Fiction/Fiction";
import Nonfiction from "../Page/Home/Nonfiction/Nonfiction";
import Biography from "../Page/Home/Biography/Biography";
import Novel from "../Page/Home/Novel/Novel";
import Bookdetail from "../Page/Home/Books/Bookdetail/Bookdetail";
import FictionDetails from "../Page/Home/Fiction/FictionDetails/FictionDetails";
import Payment from "../Page/Home/Payment/Payment";
import Profile from "../Layout/Profile";
import UserProfile from "../Profile/UserProfile/UserProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      
      {
        path: '/:id',
        element: <Bookdetail></Bookdetail>
      },
      {
        path: '/kids',
        element: <Kids></Kids>
      }, 
      {
        path: '/fiction',
        element: <Fiction></Fiction>
      },
      {
        path: '/fiction/:fid',
        element:<FictionDetails></FictionDetails>
      },
       {
        path: '/nonfiction',
        element: <Nonfiction></Nonfiction>
      },
      {
        path: '/biography',
        element: <Biography></Biography>
      },
      {
        path: '/novel',
        element: <Novel></Novel>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/contactus',
        element: <Contactus></Contactus>
      },
      {
        path: '/payment',
        element: <Payment></Payment>
      }
    ]
  },
  {
    path: '/profile',
    element:<Profile></Profile>,
    children: [
      {
        path: 'userprofile', // Remove the leading slash
        element: <UserProfile></UserProfile>
      }
    ]
  }
]);
