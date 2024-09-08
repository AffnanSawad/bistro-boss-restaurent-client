import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import Chef from "../Chef/Chef";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <div className="max-w-screen-xl mx-auto my-10">
                <Category></Category>
                <Chef></Chef>
                <PopularMenu></PopularMenu>
                <CallUs></CallUs>
                <Featured></Featured>
                <Testimonials></Testimonials>
            </div>
        </div>
    );
};

export default Home;