import React, { useState } from "react" 
import { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import { fetchUserData } from "../store/";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setLoading, setUser, setError } from '../store/userSlice';

export default function Login({setProgress}){
    useEffect(()=>{
        setProgress(30);
        setTimeout(()=>{
            setProgress(100)
        },1000);
    },[]);

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const {loading, error} = useSelector((state)=>state.user)

    
//       async (credentials) => {
//     const dispatch = useDispatch();
//     try {
//       // dispatch(setLoading());
//       const { token, user } = response.data;
//       localStorage.setItem('token', token);
  
      
      
//       const response = await axios.get(`http://localhost:8000/api/login/`, credentials);
      
//       console.log('user:', user);
//       console.log('token:', token);
//       dispatch(setUser(user));
//     } catch (error) {
//       dispatch(setError(error.message));
//     }
//   };  
  
    
    // dispatch(setLoading(true));
    async function submit(e){
        // axios.defaults.withCredentials =true;
        e.preventDefault()

        axios.post(`http://localhost:8000/api/login`, { 
    email: email,
    password: password,
}).then(res => {
    dispatch(setLoading(false));
    toast("Login successful");
  
    const userData = res.data.user; 
    // const token = localStorage.getItem('token'); // Correct variable name
    console.log(userData);
    
    dispatch(setUser(userData));

    navigate("/");
    // dispatch(fetchUserData(userData, storedToken));

}).catch(err => {
    console.log(err);
    if (err.response?.status === 401) {
        return toast.error("Invalid Credentials");
    }
    toast.error("505 back end error ");
    dispatch(setLoading(false));
});

    }
    return<>

                                    {/* login  */}
    <div >

        <h2 className="text-2xl m-2 p-4 text-center bg-light font-bold font-mono" >Login</h2>

        <div className=" justify-center items-center flex m-8 p-4  ">
        <form className="grid m-2 justify-center border rounded p-6 font-sans" action="POST">
            <label htmlFor="login" className="font-bold flex ">Email</label>
            <input type="email"  placeholder="email*" onChange={(e)=>{setEmail(e.target.value)}} className="border flex m-2 p-2 lg:w-96 " />
            <label htmlFor="password" className="font-bold flex"  >Password</label>
            <input type="password" autoComplete="off" name="password" id="password" placeholder="Password*"  onChange={(e)=>{setPassword(e.target.value)}} className="border flex m-2 mb-4 p-2 " />
            <button type="submit"  onClick={submit} className="border flex hover:ring-2 bg-primary justify-center text-white text-center p-2 text-xl">
                {loading? 'Loading..':'Login'}
            </button>
            {error&&(
                <div className="alert alert-danger" role="alert">{error}</div>
            )}

            <div className="flex m-4">

            <p className="font-sans  mr-2">Not a member?
             </p>
             <Link to="/register" className="font-bold"> register</Link>
            </div>
        </form>
        </div>
    </div>
    </>
}