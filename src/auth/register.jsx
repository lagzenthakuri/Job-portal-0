import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register({ setProgress }) {

    // top loader
     useEffect(() => {
    setProgress(30);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
  }, []);      
              
  // value 
    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCpassword] = useState("")
    const [phone, setPhone] = useState("")
    const [gender, setGender] = useState("")
    const [experience, setExperience] = useState("")
    const [company, setCompany] =  useState("")

               // changing role and it's requirement
    const [selectedRole ,setSelectedRole] = useState("jobseeker")
   
    function changeDivClass(e){
      setSelectedRole(e.target.value)
    
    }
                      

    

   

    // handeling the form submit
    async function submit(e) {
      e.preventDefault();
      // console.log(user);
      try{

        await axios.post(`http://localhost:8000/api/signup/`,{
          username, 
          email,
          password,
          cpassword,
          phone,
          gender,
          selectedRole,
          experience,
          company

       }).then((res)=>{
        const token = res.data.token
            if(res.data ==="exist"){
              alert('User  already  exists')
            }else if(res.data === "notexist"){
              alert('success')
              localStorage.setItem('token',token)
              navigate("/login")
            } 
            console.log(res);
        });
      } catch(error){
        console.log("register",error);
      }
      };

  return (
    <>
      <div>
        <h2 className="text-2xl  p-4 text-center bg-light font-bold h-full w-full font-mono   ">
          Register
        </h2> 
        <div className=" justify-center items-center">
          <form method="POST" className="grid m-2 justify-center border rounded p-5 font-sans lg:grid-cols-2 md:grid-cols-2 gap-6" >

            {/* username */}
            <div >
              <label htmlFor="username" className="font-bold">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Username*"
                onChange={(e)=>{setUsername(e.target.value)}}
                className="border rounded m-2 p-2 w-full "
                />
            </div>
                        
                        {/* email  */}
            <div >
              <label htmlFor="email"   className="font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                onChange={(e)=>{setEmail(e.target.value)}}
                name="email"
                placeholder="Email*"
                className="border rounded m-2 p-2 w-full" />
            </div>

            <div >
              <label htmlFor="phone" className="font-bold">
                Phone
              </label>
              <input
                type="string"
                name="phone"
                id="phone"  
                onChange={(e)=>{setPhone(e.target.value)}}
                placeholder="Number*"
                className="border rounded m-2 p-2 w-full"
                />
            </div>

            <div className=" accent-lime-950 ">
                <div>
                <label htmlFor="gender" className="font-bold ">Gender</label>
                </div>
               <div className="p-2 m-2 border rounded">
                <label type="radio" htmlFor="male" className="m-2" >
                  <input type="radio" className="m-2" onChange={(e)=>{setGender(e.target.value)}} name="gender" value="male"  />
                <span>Male</span>
                </label>
                <label type="radio "  >
                  <input type="radio" className="m-2" htmlFor="female" onChange={(e)=>{setGender(e.target.value)}} name="gender"  value="female"  />
                <span>Female</span>
                </label>
               </div>
              
              
            </div>
            <div>
              <label htmlFor="password"  className="font-bold">
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={(e)=>{setPassword(e.target.value)}}
                id="password"
                placeholder="Password*"
                autoComplete="off"
                className="border rounded m-2 mb-4 p-2  w-full"
              />
            </div>
            <div >
              <label htmlFor="password"  className="font-bold">
                Confirm Password
              </label>
              <input
                type="password"
                name="cpassword"  
                onChange={(e)=>{setCpassword(e.target.value)}}
                id="cpassword"
                placeholder=" confirm Password*"
                autoComplete="off"
                className="border rounded m-2  p-2  w-full"
              />
            </div>


            <div >
              <label htmlFor="Role" className="font-bold">Role</label>
              <div>
             <select name="role" className="m-2 p-2 border rounded w-full" id="role" onChange={changeDivClass} value={selectedRole}    >
              <option value="jobseeker" >JobSeeker</option>
              <option value="jobrecuiter">JobRecuiter</option>
             </select>
              </div>
            </div>
            

            <div>
              {/* chaning exp with role  */}
            {selectedRole === "jobseeker" && (
        <div className="jobseeker">
          <label name="experience" className="font-bold">Experience</label>
          <div>
            <input type="Experience" className="border w-full m-2 p-2" 
            onChange={(e)=>{setExperience(e.target.value)}}
            name="experience" placeholder="Experience*" />
          </div>
        </div>
      )}

      {selectedRole === "jobrecuiter" && (
        <div className="jobrecuiter">
          <label name="company" className="font-bold">Company</label>
          <div>
            <input type="company" name="company" className="border w-full m-2 p-2" placeholder="Company*" onChange={(e)=>{setCompany  (e.target.value)}} />
          </div>
        </div>
      )}
            </div>

            <div className="form-field">
            <button type="submit" onClick={submit}
              className="border rounded hover:ring-2 w-full bg-primary text-center text-white p-2 text-xl m-2 ">
              Create Account
            </button>

                </div>
              <div > 
            <p className=" font-sans">Already have an account?</p>
            <Link to="/login"  className="font-bold underline font-sans ">Login</Link>
              </div>
              
          </form >
        </div>
      </div>
    </>
  );
}
