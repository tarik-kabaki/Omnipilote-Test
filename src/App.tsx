import { useEffect, useState } from 'react'
import Login from './pages/login/login'
import {  Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Register from './pages/register/register';


function App() {
  const navigate = useNavigate();
  const [access , setAccess] = useState<boolean>(false);

  interface stateType {
    auth:{
      profile:{
        email: string;
        password: string;
      }
    }
};

  const auth = useSelector((state:stateType)=> state.auth.profile);

  useEffect(()=>{
    if(auth.email && auth.password){
      setAccess(true);
    } else {
      setAccess(false);
    }
  },[auth]);


  useEffect(()=>{
    if(access){
      navigate("/dashboard");
    };
  },[access]);

  return (
   
   <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/dashboard' element={ access ? <Dashboard/> : <Login/>} />
    <Route path='/register' element={ <Register/>} />
   </Routes>
  )
}

export default App
