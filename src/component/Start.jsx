import React, { useRef} from 'react'
import { useDispatch } from 'react-redux'
import { updateUserName } from '../redux/userSlicer'

const Start = () => {
  const dispatch=useDispatch()
  const userInfo=useRef()
  const clickHandle=()=>{
    userInfo.current.value && dispatch(updateUserName(userInfo.current.value))
  }

  return (
    <div className='login'>
    <p>The more questions you answer correct, the more awards you can earn. They are accumulated.</p>
      <input type='text' placeholder='Enter your username' 
      ref={userInfo}/>
      <button 
      onClick={clickHandle}>START</button>
    </div>
  )
}

export default Start