import { useState } from 'react';
import {  User } from '../../dummyBase/dummyBase';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerAnewUser } from '../../redux/authSlice';
import { useSelector } from 'react-redux';

interface stateType {
   
    auth:{
       database : User[],  
      profile:{
        email: string;
        password: string;
      }
      error: boolean;
    },
    
};


const Register = () => {
    const registerData = useSelector((state:stateType)=> state.auth.database);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>("");

    const handleSubmit = () => {
        const checkExisitingUser = registerData.find((item) => item.email == email);
        if(checkExisitingUser){
        setError("this user is already exist")
    } else {
        dispatch(registerAnewUser({email:email , password : password})); 
        navigate('/login');
        setError(null);
    }
    };


  return (
    <div>
    <div className="w-full h-screen lg:flex">
  <div className="w-full bg-gray-800 h-full flex items-center justify-center relative">
    <div className=" p-5 left-0 top-0 absolute text-white text-3xl flex items-center gap-5">
   
      <span className="font-[Caveat]">Omnipilote Test</span>
    </div>
    <section className="flex items-center flex-col  w-full">
      <h1 className="text-white text-8xl  mb-8 text-center ">
        <span className="font-[Caveat]">Welcome to Omnipilote Test</span>
      </h1>
      <h1 className="text-white  font-bold mb-8">
     You do have an account ! Login
      </h1>
      <button onClick={()=>navigate("/login")} className="text-white text-sm mb-8 font-semibold w-[350px] h-[50px] rounded-full gap-3 border-gray-300 border-2 flex  justify-center items-center">
        
        <span>Login</span>
      </button>
      <div className="flex items-center gap-5 w-[450px] mb-8">
        <hr className="border-[1px] border-gray-500 w-full" />
        <span className="text-white">OR</span>
        <hr className="border-[1px] border-gray-500 w-full" />
      </div>
      <div className="text-white w-[450px] mb-10">
        <input
          className="w-full p-4 text-sm rounded-full bg-transparent border-2 border-gray-500 placeholder:text-gray-500 text-gray-100 mb-8 focus:outline-none"
          placeholder="Email"
          onChange={(e)=> setEmail(e.target.value)}
         
        />
        <input
          className="w-full p-4 text-sm rounded-full bg-transparent border-2 border-gray-500 placeholder:text-gray-500 text-gray-100 focus:outline-none"
          placeholder="Password"
          type="password"
          onChange={(e)=> setPassword(e.target.value)}
        />
      </div>
      <div className="w-full flex justify-center">
        <button
        onClick={handleSubmit}
          className="w-[300px] h-[50px] rounded-full bg-blue-500 text-white"
        >
          Register
        </button>
      </div>
      {error ? <div className='text-red-500 mt-5 text-[14px]'>{error}</div> : null}
    </section>
    
  </div>
</div>
</div>
  )
}

export default Register