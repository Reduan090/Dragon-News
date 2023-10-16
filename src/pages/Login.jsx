import { Link } from "react-router-dom";
import Navbar from "./shared/Navbar";

const Login = () => {

    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form.get('email'))
    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h1 className="text-5xl font-bold text-center">Login your account</h1>

                <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            name="password"
                            placeholder="password"
                            className="input input-bordered"
                            required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p className="text-center mt-3">Don’t Have An Account ? <Link className="text-red-400 underline font-semibold" to='/resister'>Resister</Link></p>
                </form>

                
            </div>
        </div>

    );
};

export default Login;