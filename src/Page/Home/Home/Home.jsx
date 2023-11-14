

// import ReviewCard from "../../../Review/Reviewcard/ReviewCard";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";
import Counterup from "./Counterup/Counterup";
import Review from "../Home/Review/Review"
// import ClientReview from '../../../Review/ReviewCard/ClientReview'


const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Books></Books>
            <Counterup></Counterup>
             <Review></Review>   
        </div>
    );
};

export default Home;