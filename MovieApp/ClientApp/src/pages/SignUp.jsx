import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
//import { UserAuth } from "../context/AuthContext";
//import validator from "validator";


//const SignUp = () => {
//    const url = "https://localhost:7162/api/Auth/Register";
//    const [username, setUsername] = useState("");
//    const [password, setPassword] = useState("");
//    const [email, setEmail] = useState("");

//    //const { user, signUp } = UserAuth();
//    const navigate = useNavigate();

    //const handleSubmit = async (e) => {
    //    e.preventDefault();

    //    try {
    //        await signUp(username, password);
    //        navigate("/");
    //    } catch (error) {
    //        console.log(error);
    //    }


    //};

    const SignUp = () => {
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [email, setEmail] = useState("");
        const api = "https://localhost:44474/api/Authentication/register";

        const navigate = useNavigate();

        const IsValidate = () => {
            let isproceed = true;
            let errormessage = 'Please enter the value in ';
            if (username === null || username === '') {
                isproceed = false;
                errormessage += ' Username';
            }
            if (password === null || password === '') {
                isproceed = false;
                errormessage += ' Password';
            }
            if (email === null || email === '') {
                isproceed = false;
                errormessage += ' Email';
            }

            if (!isproceed) {
                toast.warning(errormessage)
            } else {
                if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {

                } else {
                    isproceed = false;
                    toast.warning('Please enter the valid email')
                }
            }
            return isproceed;
        }


        //const handleSubmit = (e) => {
        //    e.preventDefault();
        //    let regobj = { username, password, email };
        //    if (IsValidate()) {
        //        //console.log(regobj);
        //        fetch("https://localhost:44474/api/Authentication/register", {
        //            method: "POST",
        //            headers: { 'content-type': 'application/json' },
        //            body: JSON.stringify(regobj)
        //        }).then((res) => {
        //            toast.success('Registered successfully.')
        //            navigate('/');
        //        }).catch((err) => {
        //            console.log(err.message)
        //            toast.error('Failed :' + err.message);
        //        });
        //    }
        //}
        const handleSubmit = (e) => {
            e.preventDefault();

            if (IsValidate()) {
                axios
                    .post(api, {
                        Username: username,
                        Email: email,
                        Password: password,
                    })
                    .then((res) => {
                        toast.success("User registered");
                        navigate("/login");
                    })
                    .catch((err) => {
                        toast.error("Login failed, the username could be taken: " + err.message);
                    });
            }
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
                                <h1 className="text-3xl font-bold">Sign Up</h1>
                                <form
                                    onSubmit={handleSubmit}
                                    className="w-full flex flex-col py-4"
                                >
                                    <input
                                        className="p-3 my-2 bg-gray-700 rouded"
                                        type="text"
                                        placeholder="Username"
                                        autoComplete="username"
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                    <input
                                        className="p-3 my-2 bg-gray-700 rouded"
                                        type="email"
                                        placeholder="Email"
                                        autoComplete="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />

                                    <input
                                        className="p-3 my-2 bg-gray-700 rouded"
                                        type="password"
                                        placeholder="Password"
                                        autoComplete="current-password"
                                        onChange={(e) => setPassword((e.target.value))}
                                        required
                                        minLength="6"
                                    />
                                    <button className="bg-cyan-600 py-3 my-6 rounded font-bold">
                                        Sign Up
                                    </button>
                                    <div className="flex justify-between items-center text-sm text-gray-600">
                                        <p>
                                            <input className="mr-2" type="checkbox" />
                                            Remember me
                                        </p>
                                        <p>Need Help?</p>
                                    </div>
                                    <p className="py-8">
                                        <span className="text-gray-600">
                                            Already subscribed to Yasflix?
                                        </span>{" "}
                                        <Link to="/signIn">Sign In</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

export default SignUp;
