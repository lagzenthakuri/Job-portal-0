import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setLoading, setUser, setError } from "../store/userSlice";

export default function Login({ setProgress }) {
    useEffect(() => {
        setProgress(30);
        setTimeout(() => {
            setProgress(100);
        }, 1000);
    }, []);

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.user);

    async function submit(e) {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);

        axios.post("http://localhost:8000/api/login", {
            email: email,
            password: password
        })
        .then((res) => {
            dispatch(setLoading(false));
            toast("Login successful");
            const userData = res.data.user;
            console.log(userData);
            dispatch(setUser(userData));
            navigate("/");
        })
        .catch((err) => {
            console.log(err);
            if (err.response?.status === 401) {
                return toast.error("Invalid Credentials");
            }
            toast.error("505 back end error ");
            dispatch(setLoading(false));
        });
    }

    return (
        <div>
            <h2 className="text-2xl m-2 p-4 text-center bg-light font-bold font-mono">Login</h2>
            <div className="justify-center items-center flex m-8 p-4">
                <form className="grid m-2 justify-center border rounded p-6 font-sans" onSubmit={submit}>
                    <label htmlFor="login" className="font-bold flex">Email</label>
                    <input
                        type="email"
                        placeholder="email*"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border flex m-2 p-2 lg:w-96"
                    />
                    <label htmlFor="password" className="font-bold flex">Password</label>
                    <input
                        type="password"
                        autoComplete="off"
                        name="password"
                        id="password"
                        placeholder="Password*"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border flex m-2 mb-4 p-2"
                    />
                    <button type="submit" className="border flex hover:ring-2 bg-primary justify-center text-white text-center p-2 text-xl">
                        {loading ? "Loading.." : "Login"}
                    </button>
                    {error && <div className="alert alert-danger" role="alert">{error}</div>}
                    <div className="flex m-4">
                        <p className="font-sans mr-2">Not a member?</p>
                        <Link to="/register" className="font-bold">register</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
