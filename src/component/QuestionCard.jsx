import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import {updateCurrentQuesNum,finish,updateTimer,resetTimer} from '../redux/userSlicer'

const QuestionCard = () => {
    const data = [
        {
          id: 1,
          question: "Which of the following is a sustainable resource?",
          answers: [
            {
              text: "Natural gas",
              correct: false,
            },
            {
              text: "Wind",
              correct: true,
            },
            {
              text: "Uranium",
              correct: false,
            },
            {
              text: "Coal",
              correct: false,
            },
          ],
        },
        {
          id: 2,
          question: "What characteristic does not share the products/services that are considered sustainable?",
          answers: [
            {
              text: "Compensate the unfair payment in foreign countries through sustainable actions.",
              correct: true,
            },
            {
              text: "It is made entirely, or a major part of its production comes from renewable resources",
              correct: false,
            },
            {
              text: "Provide a good work environment for its employees, fair and equal hiring.",
              correct: false,
            },
            {
              text: "Efforts to minimize or compensate for the negative impact.",
              correct: false,
            },
          ],
        },
        {
          id: 3,
          question: "The \"Three Rs\" are \"Reduce, Reuse, Renewables\"?",
          answers: [
            {
              text: "True",
              correct: false,
            },
            {
              text: "False",
              correct: true,
            },
          ],
        },
        {
          id: 4,
          question: "Which of these is an example of sustainability?",
          answers: [
            {
              text: "A power station burning fossil fuel",
              correct: false,
            },
            {
              text: "A wind farm out at sea",
              correct: true,
            },
            {
              text: "Private car use",
              correct: false,
            },
            {
              text: "A cup of hot cocoa",
              correct: false,
            },
          ],
        },
        {
          id: 5,
          question: "Environment and Development, was created in 1983 to address the growing concern about environmental, economic, and social issues",
          answers: [
            {
              text: "Sustainability Commission",
              correct: false,
            },
            {
              text: "Brundtland Commission",
              correct: true,
            },
            {
              text: "Geneva Commission",
              correct: false,
            },
            {
              text: "Sustainable Development Commission",
              correct: false,
            },
          ],
        },
        {
          id: 6,
          question: "Water pollution that comes from a known and specific location is called what?",
          answers: [
            {
              text: "Non-point source pollution",
              correct: false,
            },
            {
              text: "In-on-point source pollution",
              correct: false,
            },
            {
              text: "Point source pollution",
              correct: true,
            },
            {
              text: "Runoff",
              correct: false,
            },
          ],
        },
        {
          id: 7,
          question: "What does a 'finite resource' mean?",
          answers: [
            {
              text: "There is a limited supply",
              correct: true,
            },
            {
              text: "The supply is renewable",
              correct: false,
            },
            {
              text: "The resource will continue forever",
              correct: false,
            },
            {
              text: "There is an unlimited supply",
              correct: false,
            },
          ],
        },
        {
          id: 8,
          question: "Where does most of the Earth's energy come from?",
          answers: [
            {
              text: "Water",
              correct: false,
            },
            {
              text: "The Sun",
              correct: true,
            },
            {
              text: "People",
              correct: false,
            },
            {
              text: "The moon",
              correct: false,
            },
          ],
        },
        {
          id: 9,
          question: "What are coal and oil made from?",
          answers: [
            {
              text: "Dead plants and animals",
              correct: true,
            },
            {
              text: "Burning wood",
              correct: false,
            },
            {
              text: "Volcanoes",
              correct: false,
            },
            {
              text: "Glaciers",
              correct: false,
            },
          ],
        },
        {
          id: 10,
          question: "It is important that educators, leaders, and citizens recognize that sustainable development is an evolving concept and that the list of sustainability perspectives can therefore grow and change.",
          answers: [
            {
              text: "TRUE",
              correct: true,
            },
            {
              text: "FALSE",
              correct: false,
            },
          ],
        },
        {
          id: 11,
          question: "The three areas of sustainability are:",
          answers: [
            {
              text: "Physical, Economical, Political",
              correct: false,
            },
            {
              text: "Environmental, Social, Physical",
              correct: false,
            },
            {
              text: "Economical, Environmental, Social",
              correct: true,
            },
            {
              text:"None of the above options",
              correct: false,
            },
          ],
        },
        {
          id: 12,
          question: "This report is the disclosure and communication of environmental, social, and governance (ESG) goals—as well as a company's progress towards them.",
          answers: [
            {
              text: "Development report",
              correct: false,
            },
            {
              text: "Sustainability report",
              correct: true,
            },
            {
              text: "Corporate report",
              correct: false,
            },
            {
              text:"Sustained Annual report",
              correct: false,
            },
          ],
        },
        {
          id: 13,
          question: "Our Ecological or Carbon Footprint is the ratio of:",
          answers: [
            {
              text: "The amount of resources you use to the amount of resources available",
              correct: true,
            },
            {
              text: "How many people there are on earth to how much space we have on earth",
              correct: false,
            },
            {
              text: "People to cars",
              correct: false,
            },
            {
              text:"Robots available to robots needed",
              correct: false,
            },
          ],
        },
        {
          id: 14,
          question: "Which of these things are you most likely to NOT find in a sustainable home?",
          answers: [
            {
              text: "LED Light bulbs",
              correct: false,
            },
            {
              text: "Low-Flow Toilets & Showers",
              correct: false,
            },
            {
              text: "A wood burning stove",
              correct: false,
            },
            {
              text:"A Hummer (SUV) in the garages",
              correct: true,
            },
          ],
        },
        {
          id: 15,
          question: "Warfare is not inherently destructive to sustainable development. Peace,development, and environmental protection are not interdependent and divisible.",
          answers: [
            {
              text: "FALSE",
              correct: true,
            },
            {
              text: "TRUE",
              correct: false,
            },
          ],
        },
      ]
    
    //when fetch data, question number can be load as req.params.Id
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [inClass, setInClass] = useState('')
    // const [timer, setTimer] = useState(30)
    const timer=useSelector(state=>state.timer)
    const currentQuesNum=useSelector(state=>state.currentQuesNum)
    const dispatch=useDispatch()
 
    const delay = (duration, callback) => {
      setTimeout(() => {
        callback();
      }, duration);
    };

    useEffect(()=>{
      if(timer<=0) dispatch(finish())

      const interval=setInterval(()=>{
        dispatch(updateTimer())
      },1000) 

      return ()=>clearInterval(interval)
    },[timer,dispatch])

    const clickHandle=(a)=>{
          setSelectedAnswer(a);
          setInClass("active")

          delay(1000,()=>{
            setInClass(a.correct ? "itemR":"itemW");
          })

          delay(2000,()=>{
            if(a.correct){
              dispatch(updateCurrentQuesNum()) 
              setInClass('')
              setSelectedAnswer(null)
              dispatch(resetTimer())
            }else{
              dispatch(finish())
            }
          }) 
    }

    return (
        <div className='card'>
        <div className='top'>
            <div className='timer'>
                <p>{timer}</p>
            </div>
        </div>
        <div className='bottom'>   
        <div className='question'>
        <h3>{currentQuesNum+1}. {data[currentQuesNum].question}</h3>
        <div className='answers'>
        {data[currentQuesNum].answers.map(item=>(
          <button key={item.text} 
          className={selectedAnswer===item ? inClass :''}
          onClick={()=>{clickHandle(item)}}>
             {item.text}
          </button>
        ))}                        
        </div>
        </div>
    </div>
    </div>
  )
}

export default QuestionCard