import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { UserAuth } from "../context/AuthContext";

const Login = () => {
    const url = "api/Auth/Login";
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
   // const { user, logIn } = UserAuth();
    const navigate = useNavigate();

    //const handleSubmit = async (e) => {
    //    e.preventDefault();
    //    setError("");
    //    try {
    //        await logIn(email, password);
    //        navigate("/");
    //    } catch (error) {
    //        console.log(error);
    //        setError(error.message);
    //    }
    //};

    useEffect(() => {
        sessionStorage.clear();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            Axios.post(url, {
                Username: username,
                Password: password
            })
                .then(res => {
                    if (Object.keys(res).length === 0) {
                        toast.error('Login failed, invalid credentials');
                    } else {
                        toast.success('Success');
                        sessionStorage.setItem('username', username);
                        sessionStorage.setItem('token', res.data.token);
                        sessionStorage.setItem('role', res.data.role);
                        usenavigate('/');
                    }
                })
                .catch((err) => {
                    toast.error('Login Failed due to :' + err.message);
                });
        }
    }

    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Please Enter Username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }

    return (
        <div>
            <div className="w-full h-screen">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
                    alt="/"
                    className="hidden sm:block absolute w-full h-full object-cover"
                />
                <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
                <div className="fixed w-full px-4 py-24 z-50">
                    <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
                        <div className="max-w-[320px] mx-auto py-16">
                            <h1 className="text-3xl font-bold">Sign In</h1>
                            {error ? <p className='p-3 bg-red-500 my-2'>{error}</p> : null}
                            <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
                                <input
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="p-3 my-2 bg-gray-700 rouded"
                                    type="text"
                                    placeholder="Username"
                                    autoComplete="username"
                                    required
                                />
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="p-3 my-2 bg-gray-700 rouded"
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="current-password"
                                    required
                                    minLength="6"
                                />
                                <button className="bg-cyan-600 py-3 my-6 rounded font-bold">
                                    Sign In
                                </button>
                                <div className="flex justify-between items-center text-sm text-gray-600">
                                    <p>
                                        <input className="mr-2" type="checkbox" />
                                        Remember me
                                    </p>
                                    <p>Need Help?</p>
                                </div>
                                <p className="py-8">
                                    <span className="text-gray-600">New to Yasflix?</span>{" "}
                                    <Link to="/signUp">Sign Up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
