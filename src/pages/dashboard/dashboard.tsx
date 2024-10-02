import { Container } from '@mui/material'
import React, { useState } from 'react'
import { dataType, DummtData } from '../../dummtData/dummtData'
import { CiEdit } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import Modals from './modal';
import { useSelector } from 'react-redux';
import { User } from '../../dummyBase/dummyBase';
import { useDispatch } from "react-redux";
import { handleRemove } from '../../redux/authSlice';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
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

const Dashboard = () => {
    const dispatch = useDispatch();
    const registerData = useSelector((state:stateType)=> state.auth.data);

const handleRemoves = (id:number)=>{
    dispatch(handleRemove({id: id}));
};
  return (
    <div className='w-full h-full'>
        <Container maxWidth="xl">
            <div className='lg:h-[200px] h-[50px]'></div>
            <div className="w-full h-full ">
                <section className='w-full h-full lg:flex lg:justify-end flex justify-start mb-5'>
                  <button className='flex items-center justify-center w-[130px] h-[50px] bg-red-800 rounded-lg text-white font-serif'>Retour</button>  
                </section>
            
           <section className='lg:mb-14 lg:flex items-center justify-between mb-10'>
               <div className='lg:mb-0 mb-3 lg:flex items-center gap-5'>
                <div className='lg:mb-0 mb-3 w-[300px] h-[50px] rounded-lg border-2 border-gray-900 p-3'>
                    <input className=' placeholder:text-gray-800 w-full h-full font-serif focus:outline-none' placeholder='Catégorie'/>
                </div>
                <button className='lg:mb-0 mb-3 flex items-center justify-center w-[130px] h-[50px] bg-cyan-700 rounded-lg text-white font-serif'>Rechercher</button>
                <button className=' lg:mb-0 mb-3 flex items-center justify-center w-[130px] h-[50px] bg-cyan-700 rounded-lg text-white font-serif'>Annuler</button>
               </div>
               
               <div className='lg:mb-0 mb-3 lg:flex items-center gap-5'>
                <div className='lg:mb-0 mb-3 w-[300px] h-[50px] rounded-lg border-2 border-gray-900 p-3'>
                    <input className=' placeholder:text-gray-800 w-full h-full font-serif focus:outline-none' placeholder='Catégorie'/>
                </div>
                <button className='lg:mb-0 mb-3 flex items-center justify-center w-[130px] h-[50px] bg-cyan-700 rounded-lg text-white font-serif'>Enregistrée</button>
                <button className='lg:mb-0 mb-3 flex items-center justify-center w-[130px] h-[50px] bg-cyan-700 rounded-lg text-white font-serif'>Annuler</button>
               </div>
            </section>

            <section className='w-full h-auto flex items-center flex-col'>
        
                    
                     <div className="container mx-auto lg:p-4">
                     <div className="mb-8">
                       <table className="min-w-full border border-gray-700">
                         <thead>
                           <tr className="bg-gray-800 text-gray-500">
                             <th className=" border-gray-700 px-4 border-[1px] py-2 w-full flex justify-start ">Catégorie produits</th>
                             <th className=" border-gray-700 px-4 border-[1px] border-l-none py-2 w-[25%] text-start ">Actions</th>
                           </tr>
                         </thead>
                         <tbody>
                          {registerData.map((item) => (
                           <tr>
                             <td className="border border-gray-300 px-4 py-2">{item.product}</td>
                             <td className="border border-gray-300 px-4 py-2">
                                <div className='flex items-center gap-2'>
                       <Modals itemID={item.id}/>
                    <button onClick={()=>handleRemoves(item.id)}  className='w-[45px] h-[40px] bg-red-400 flex items-center justify-center rounded-md hover:bg-red-600 duration-200'>
                        <IoClose className='text-2xl text-white font-bold'/>
                    </button>
                                </div>
                             </td>
                           </tr>
                         ))}
                         </tbody>
                       </table>
                     </div>
                     
                     </div>
                   
               
                
            </section>
        
            </div>
        </Container>
    </div>
  )
}

export default Dashboard

