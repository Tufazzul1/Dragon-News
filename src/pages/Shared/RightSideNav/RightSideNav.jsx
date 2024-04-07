import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
import bgImage from '../../../assets/bg.png'


const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-2xl font-bold">Login With</h2>
                <button className="btn text-blue-500 w-full">
                    <FaGoogle />
                    Login With Google
                </button>
                <button className="btn w-full">
                    <FaGithub />
                    Login With Google
                </button>
            </div>
            <div className="p-4 mb-6">
                <h2 className="text-2xl font-bold mb-3">Find Us On</h2>
                <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
                    <FaFacebook className="mr-3"></FaFacebook>
                    FaceBook
                </a>
                <a className="p-4 flex text-lg items-center border " href="">
                    <FaTwitter className="mr-3"></FaTwitter>
                    Twitter
                </a>
                <a className="p-4 flex text-lg items-center border rounded-b-lg" href="">
                    <FaInstagram className="mr-3"></FaInstagram>
                    Instagram
                </a>
            </div>

            {/* Q Zone */}
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-2xl font-bold">Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>

            <div>
                <div style={{ backgroundImage: `url(${bgImage})` }} className="card p-1 bg-primary  text-white">
                    <div className="card-body text-center">
                        <h2 className="card-title text-2xl">Create an Amazing Newspaper</h2>
                        <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-error text-white">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;