

// import ReviewCard from "../../../Review/Reviewcard/ReviewCard";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";
import Counterup from "./Counterup/Counterup";

import UserReview from "../../../Review/UserReview/UserReview";
// import ClientReview from '../../../Review/ReviewCard/ClientReview'


const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            {/* <Books></Books> */}
            <Counterup></Counterup>
            <UserReview></UserReview>
             {/* <Review></Review>    */}
        </div>
    );
};

export default Home;