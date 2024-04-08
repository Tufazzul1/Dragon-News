import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {

    const {signIn} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    console.log("location from login page", location)

    const handleLogin = e =>{
        e.preventDefault();
        // console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        signIn(email, password)
        .then(result =>{
            console.log(result.user);


            //  navigate after Login
            navigate(location?.state ? location.state : '/')
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-10">
                <h2 className="text-2xl text-center font-bold">Login Your Account</h2>

                <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100 mx-auto">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="input input-bordered"
                                required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="ml-4">Do not have an account ? Please <Link to={'/register'} className="text-blue-500 font-bold">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;