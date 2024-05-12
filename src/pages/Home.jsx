import { useLoaderData } from "react-router-dom";
import Carousel from "../Components/Carousel";
import TabsCategories from "../Components/TabsCategories";


const Home = () => {
    const jobs = useLoaderData()
    console.log(jobs)
    return (
        <div>
            <Carousel/>
            <TabsCategories jobs={jobs}/>
        </div>
    );
};

export default Home;