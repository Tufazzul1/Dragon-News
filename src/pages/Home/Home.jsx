import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import {useLoaderData} from "react-router-dom"
import NewsCard from "./NewsCard";


const Home = () => {

    const news = useLoaderData();
    console.log(news)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className=" grid grid-cols-1 lg:grid lg:grid-cols-4 gap-6 mt-16">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>

                {/* News Container */}
                <div className="lg:col-span-2  p-3">
                    <h2 className="text-3xl"> Dragon News Home </h2>
                    {
                        news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;