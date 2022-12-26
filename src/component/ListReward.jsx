import React,{useEffect,useMemo} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { totalAmount,finish } from '../redux/userSlicer'

const ListReward = () => {
    const listRewards=useMemo(() =>[
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1000" },
        { id: 6, amount: "$ 2000" },
        { id: 7, amount: "$ 4000" },
        { id: 8, amount: "$ 8000" },
        { id: 9, amount: "$ 16000" },
        { id: 10, amount: "$ 32000" },
        { id: 11, amount: "$ 64000" },
        { id: 12, amount: "$ 125000" },
        { id: 13, amount: "$ 250000" },
        { id: 14, amount: "$ 500000" },
        { id: 15, amount: "$ 1000000" },
    ].reverse()
    , [])

    const currentQuesNum=useSelector((state)=>state.currentQuesNum);
    // const preAmount=useSelector(state=>state.amount)
    const dispatch=useDispatch()

    useEffect(()=>{
      if(currentQuesNum>0 && currentQuesNum<16) {
        // if(currentQuesNum>=5){
        //   const amount=Number(listRewards[15-currentQuesNum].amount.split(' ')[1].split(',')[0])*1000
        //   setCurrentAmount(amount)
        //   dispatch(totalAmount(amount+preAmount))
        // }     
        // if(currentQuesNum===15){
        //   const amount=Number(listRewards[15-currentQuesNum].amount.split(' ')[1].split(',')[0])*1000000
        //   setCurrentAmount(amount)
        //   dispatch(totalAmount(amount+preAmount))
        // }    
        const amount=Number(listRewards[15-currentQuesNum].amount.split(' ')[1])
        dispatch(totalAmount(amount))         
      }
      if(currentQuesNum===16) dispatch(finish())
    },[currentQuesNum])

  return (
    <div className='listReward'>
        {listRewards.map(reward=>(
             <div key={reward.id} className={currentQuesNum===reward.id ?'reward active'
             :'reward'}>
                <span>{reward.id}</span>
                <p>{reward.amount}</p>
             </div>
             )
        )}
    </div>
  )
}

export default ListReward