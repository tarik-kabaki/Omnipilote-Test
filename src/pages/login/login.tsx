import React, { useEffect } from 'react'
import { useState } from 'react';
import { DummyBase, User } from '../../dummyBase/dummyBase';
import { useDispatch } from "react-redux";
import { assingToken } from '../../redux/authSlice';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { dataType } from '../../dummtData/dummtData';

 interface stateType {
   
        auth:{
           
           database : User[], 
            data: dataType[],
          profile:{
            email: string;
            password: string;
          }
          error: boolean;
        },
        
    };

const Login = () => {
   
    const registerData = useSelector((state:stateType)=> state.auth.database);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
  
    const handleSubmit = () => {
        const checkUser = registerData.find((item:User)=> item.email === email && item.password === password);
        if(checkUser){
            dispatch(assingToken({email:email , password : password}));
            navigate("/dashboard")
        } else {
            setError("email or password is incorrect");
        }
    };


  return (
    <div>
        <div className="w-full h-screen lg:flex">
      <div className="w-full bg-gray-900 h-full flex items-center justify-center relative">
        <div className=" p-5 left-0 top-0 absolute text-white text-3xl flex items-center gap-5">
       
          <span className="font-[Caveat]">Omnipilote Test</span>
        </div>
        <section className="flex items-center flex-col  w-full">
          <h1 className="text-white lg:text-8xl text-6xl  mb-8 text-center ">
            <span className="font-[Caveat]">Welcome to Omnipilote Test</span>
          </h1>
          <h1 className="text-white  font-bold mb-8">
          Don't have an account ? Sing up Bellow
          </h1>
          <button onClick={()=>navigate("/register")} className="text-white text-sm mb-8 font-semibold lg:w-[350px] w-[300px] h-[50px] rounded-full gap-3 border-gray-300 border-2 flex  justify-center items-center">
            
            <span>Sing up</span>
          </button>
          <div className="flex items-center gap-5 w-[450px] mb-8">
            <hr className="border-[1px] border-gray-500 w-full" />
            <span className="text-white">OR</span>
            <hr className="border-[1px] border-gray-500 w-full" />
          </div>
          <div className="text-white lg:w-[450px] w-[300px] mb-10">
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
              Sign in
            </button>
            
          </div>
          {error ? <div className='text-red-500 mt-5 text-[14px]'>{error}</div> : null}
        </section>
      </div>
    </div>
    </div>
  )
}

export default Login