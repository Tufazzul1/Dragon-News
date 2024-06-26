import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BreakingNews = () => {
    return (
        <div className="flex gap-2">
            <button className="btn btn-sm btn-error rounded-none text-white">Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
               <Link className="mr-5" to={'/'}> I can be a React component, multiple React components....</Link>
               <Link className="mr-5" to={'/'}> I can be a React component, multiple React components....</Link>
               <Link className="mr-5" to={'/'}> I can be a React component, multiple React components....</Link>
               <Link className="mr-5" to={'/'}> I can be a React component, multiple React components....</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;