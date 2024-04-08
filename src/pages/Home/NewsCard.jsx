import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
    const { title, image_url, details, _id, total_view } = news;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl mb-10 mt-16">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    
                        {
                            details.length > 200 ?
                             <p>{details.slice(0,200)} <Link to={`/news/${_id}`} className="text-blue-500 font-bold">Read More...</Link></p> : <p>{details}</p>
                        }
                   
                    <div>
                        <p className="font-bold mt-4">Total view : {total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default NewsCard;
