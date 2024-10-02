import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CiEdit } from "react-icons/ci";
import { dataType } from '../../dummtData/dummtData';
import { useDispatch } from "react-redux";
import { handleChnageCategory } from '../../redux/authSlice';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };



const Modals = (itemID:{itemID:number}) => {

    const dispatch = useDispatch();
    const [update,setUpdate] = useState<string>('')
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onSumbit = () => {
        dispatch(handleChnageCategory({newText:update , id:itemID.itemID}));
        setOpen(false);
    }

  return (
    <div>
      <button  onClick={handleOpen} className='w-[45px] h-[40px] bg-green-500 flex items-center justify-center rounded-md hover:bg-green-600 duration-200'>
                        <CiEdit className='text-2xl text-white'/>
                    </button> 
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='w-auto h-auto rounded-md bg-gray-800'>
            <div className='w-full h-ll text-white p-10 flex gap-5 flex-col justify-center'>
              <h1>Update your Catégorie</h1>  
              <div className='w-[400px] h-[50px] border-[1px] border-slate-500'>
                <input onChange={(e)=> setUpdate(e.target.value)} className='bg-inherit focus:outline-none w-full h-full p-3' placeholder='Update ...'/>
              </div>
              <button onClick={onSumbit} className='w-[100px] h-[50px] text-sm bg-cyan-600 rounded-md'>Apply</button>
            </div>
            
         
        </Box>
      </Modal>
    </div>
   
  )
}

export default Modals

/* <button className='w-[45px] h-[40px] bg-green-500 flex items-center justify-center rounded-md hover:bg-green-600 duration-200'>
                        <CiEdit className='text-2xl text-white'/>
                    </button> */