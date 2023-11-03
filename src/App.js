import {useEffect,useCallback} from 'react';
import './App.css';
// Hooks with redux
import {useSelector,useDispatch} from 'react-redux';
function App() {
  const dispatch = useDispatch();

  // احسن مايكون عندي اكتر من 
  // useSelector
  //  اسخدمت globalState
  const globalState = useSelector((state) => state);

  // useEffect(() =>  dispatch({type:'incrase',payload:10}),[dispatch]);
// اختصرت الزيادة والنقصان بتعليمة وحدة
const counterOperation = useCallback((type,payload) => {  
  dispatch({type,payload});
}
,[dispatch]);

useEffect(() =>  counterOperation('incrase',10),[counterOperation]);


  // const counterState = useSelector((state) => state);

  // const toggleState = useSelector((state) => state.showCounter);
const handlerCounterValue = (value) => {
  if (value < 1){
    return 'no number'
  }
  return value;
}

  const toggleCounter = () => {
    dispatch({type:'toggleCounter'});
  }

  return (
    <div className="App">
   <div className='backgrounddiv'>
   <h1>Hello Redux Basic</h1>
   {
    globalState.showCounter&&
    <>
    <div className='counter'>counter: {handlerCounterValue(globalState.value)}</div>
      <div>
        <button className='btn swit' onClick={() => counterOperation('incrase',5)}>+</button>
        <button className='btn swit' onClick={() => counterOperation('decrase',2)}>-</button>
      </div>
    </>
   }
     
      <div>
      <button className='btn' onClick={toggleCounter}>Hide/Show Counter Number</button>
      </div>
   </div>
    </div>
  );
}

export default App;
