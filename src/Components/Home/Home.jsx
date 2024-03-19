import Banner from "../HomeComponents/Banner/Banner";
import Deals from "../HomeComponents/DealsAndOffers/Deals";
import Featured from "../HomeComponents/Featured/Featured";
import PopularAirlines from "../HomeComponents/PopularAirlines/PopularAirlines";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <Deals></Deals>
            <PopularAirlines></PopularAirlines>
        </div>
    );
};

export default Home;