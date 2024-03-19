import Banner from "../HomeComponents/Banner/Banner";
import Deals from "../HomeComponents/DealsAndOffers/Deals";
import Featured from "../HomeComponents/Featured/Featured";
import NewsLatter from "../HomeComponents/NewsLatter/NewsLatter";
import PopularAirlines from "../HomeComponents/PopularAirlines/PopularAirlines";
import TravelBlog from "../HomeComponents/TravelBlog/TravelBlog";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <Deals></Deals>
            <PopularAirlines></PopularAirlines>
            <TravelBlog ></TravelBlog>
            <NewsLatter></NewsLatter>
        </div>
    );
};

export default Home;