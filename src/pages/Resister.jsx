import { useContext } from "react";
import Navbar from "./shared/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Resister = () => {

    const { createUser } = useContext(AuthContext)

      const handleResister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        //Creating User
        createUser(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error);
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h1 className="text-5xl font-bold text-center">Register your account</h1>

                <form onSubmit={handleResister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="input input-bordered"
                            required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text"
                            name="photo"
                            placeholder="Enter your photo URL"
                            className="input input-bordered"
                            required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            name="email"
                            placeholder="Enter your email address"
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered"
                            required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Resister</button>
                    </div>
                    <p className="text-center mt-3">Already Have An Account ? Please<Link className="text-red-400 underline font-semibold" to='/login'>  Login</Link></p>
                </form>

                
            </div>
        </div>
    );
};

export default Resister;