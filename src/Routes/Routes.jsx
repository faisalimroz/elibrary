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
import PrivateRoute from "./PrivateRoute";
import Secret from "../Page/Shared/Secret/Secret";
import AllUsers from "../Profile/UserProfile/AllUsers/AllUsers";
import AddItems from "../Profile/UserProfile/AddItems/AddItems";
import AdminHome from "../Profile/UserProfile/AdminHome/AdminHome";
import Manageitem from "../Profile/UserProfile/Manageitem/Manageitem";
import Order from "../Profile/UserProfile/Orders/Orders";
import Fictionbest from "../Page/Home/Fiction/Fictionbest/Fictionbest";

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
        path: '/bestfiction/:bfid',
        element:<Fictionbest></Fictionbest>
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
      },
      {
        path: '/secret',
        element: <PrivateRoute><Secret></Secret></PrivateRoute>
      }
    ]
  },
  {
    path: '/profile',
    element:<PrivateRoute><Profile></Profile></PrivateRoute>,
    children: [
      {
        path: 'userprofile', // Remove the leading slash
        element: <UserProfile></UserProfile>
      },
      {
        path: 'allusers', // Remove the leading slash
        element: <AllUsers></AllUsers>
      },
      {
        path: 'additems', // Remove the leading slash
        element: <AddItems></AddItems>
      },
      {
        path: 'adminhome', // Remove the leading slash
        element: <AdminHome></AdminHome>
      },
      {
        path: 'manageitems', // Remove the leading slash
        element: <Manageitem></Manageitem>
      },
      {
        path: 'orders', // Remove the leading slash
        element: <Order></Order>
      }
    ]
  }
]);
