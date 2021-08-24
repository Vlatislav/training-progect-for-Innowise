import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers/rootReducer';
import './styles.scss';
import { decrementAction, incrementAction } from '../../store/actions/counterChangeAction';

function FirstPage() {
  const dispatch = useDispatch();
  const counter = useSelector((state:RootState)=> state.counter.counter)

  const increment = (val:number)=>{
    dispatch(incrementAction(val))
  }

  const decrement = (val:number)=>{
    dispatch(decrementAction(val))
  }
  

  return (
    <div className="firstPage">
      <p>На этой первой странице я просто делаю инкремент/декремент для какого-то числа из store</p>
      <div className="content">
        <button className='button-1' onClick={()=>increment(Number(prompt()))}>+</button>
        <h1>{counter}</h1>
        <button className='button-1' onClick={()=>decrement(Number(prompt()))}>-</button>
      </div>
    </div>
  );
}

export default FirstPage;
