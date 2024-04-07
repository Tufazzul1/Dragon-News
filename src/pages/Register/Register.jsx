import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {

    const {createUser} = useContext(AuthContext);
    console.log(createUser)

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const email = form.get('email')
        const photo = form.get('photo')
        const passowrd = form.get('password')
        console.log(name, email, photo, passowrd );


        // create user 
        createUser(email, passowrd)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-10">
                <h2 className="text-2xl text-center font-bold">Register Your Account</h2>

                <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100 mx-auto">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Your Name"
                                className="input input-bordered"
                                required />
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="Photo URL"
                                className="input input-bordered"
                                required />
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="ml-4">Already have an account ? Please <Link to={'/login'} className="text-blue-500 font-bold">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;