import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './app.scss';
import ListReward from './component/ListReward';
import QuestionCard from './component/QuestionCard';
import Start from './component/Start';
import {persistor} from './redux/store'


function App() {
  const amount=useSelector(state=>state.amount)
  const timeOut=useSelector(state=>state.timeOut)
  const user=useSelector(state=>state.username)


  useEffect(()=>{
    if(timeOut){
      persistor.pause();
      persistor.flush().then(()=>{
        return persistor.purge();
      })
      localStorage.clear()
    }
  },[timeOut]) 
  return (
    <div className="app">
    {user?
    <>
      <div className='left'>
      {timeOut === false ?
      <QuestionCard />
      :<h1>You have won $ {amount}</h1>
      }
      </div>
        <div className='right'>
          <ListReward />
      </div>
    </>
    : <Start />}
    </div>
  );
}

export default App;
