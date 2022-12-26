import { createSlice } from "@reduxjs/toolkit";

const userSlicer=createSlice({
    name:'user',
    initialState:
    {
        username:null,
        currentQuesNum:0,
        amount: 0,
        timeOut:false,
        timer:30,
    },
    
    reducers:{
        updateUserName:(state,action)=>{
            state.username=action.payload
        },
        updateCurrentQuesNum:(state)=>{
            state.currentQuesNum+=1;
        },
        updateTimer:(state)=>{
            state.timer-=1;
        },
        resetTimer:(state)=>{
            state.timer=30;
        },
        totalAmount:(state,action)=>{
            state.amount+=action.payload;
        },
        finish:(state)=>{
            state.timeOut=true;
            // setTimeout(()=>{
            //     state.username=null
            //     state.amount=0
            //     state.currentQuesNum=0
            // },3000)
        }
    }
})

export const {updateCurrentQuesNum,updateUserName,finish,totalAmount,updateTimer,resetTimer}=userSlicer.actions;
export default userSlicer.reducer;
