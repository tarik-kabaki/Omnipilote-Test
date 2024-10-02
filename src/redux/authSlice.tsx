import { createSlice } from "@reduxjs/toolkit";
import { DummyBase } from "../dummyBase/dummyBase";
import { DummtData } from "../dummtData/dummtData";

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    database : DummyBase,
    data : DummtData,
    profile:{
        email: "" || null,
        password: "" || null,
    },
   error : false,
  },

  reducers: {
  assingToken : (state, action)=>{
    state.profile.email = action.payload.email;
    state.profile.password = action.payload.password;
  },

  registerAnewUser:(state,action)=>{
    const newUserEmail = action.payload.email;
    const newUserPassword = action.payload.password;

    state.database.push({email :newUserEmail , password:newUserPassword});

  },

  handleChnageCategory:(state,action)=>{
      const ipcmingChnage = action.payload.newText;
      const findIndex = state.data.find((item)=> item.id === action.payload.id);
      if(findIndex){
        findIndex.product = ipcmingChnage;
      };
  },

  handleRemove:(state,action)=>{
    state.data.splice(
      state.data.findIndex((item)=> item.id === action.payload.id),1
    )
    
  }
  },
});

export const {assingToken, registerAnewUser,handleChnageCategory,handleRemove } =
AuthSlice.actions;

export default AuthSlice.reducer;
