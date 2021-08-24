import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers/rootReducer';
import './styles.scss';
import { incrementAction } from './../../store/actions/incrementAction';

function FirstPage() {
  const dispatch = useDispatch();
  const counter = useSelector((state:RootState)=> state.increment.counter)

  const increment = (val:number)=>{
    dispatch(incrementAction(val))
  }

  //const decrement = (val:number)=>{
  //  dispatch({type:'DECREMENT',payload:val})
  //}
  

  return (
    <div className="firstPage">
      <p>На этой первой странице я просто делаю инкремент/декремент для какого-то числа из store</p>
      <div className="content">
        <button className='button-1' onClick={()=>increment(Number(prompt()))}>+</button>
        <h1>{counter}</h1>
        <button className='button-1' >-</button>
      </div>
    </div>
  );
}

export default FirstPage;
