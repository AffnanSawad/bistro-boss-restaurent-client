import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import Chef from "../Chef/Chef";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import AskedQuestions from "../../AskedQuestions/AskedQuestions";


const Home = () => {
    return (
        <div>
            {/* helmet */}
            <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
            {/* helmet */}



            <Banner></Banner>
            
            <div className="max-w-screen-xl mx-auto my-10">
                <Category></Category>
                <Chef></Chef>
                <PopularMenu></PopularMenu>
                <CallUs></CallUs>
                <Featured></Featured>
                <Testimonials></Testimonials>
                <AskedQuestions></AskedQuestions>
            </div>
        </div>
    );
};

export default Home;