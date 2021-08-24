import React from 'react';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers/rootReducer';
import { useState } from 'react';

function SecondPage() {
  const dispatch = useDispatch()
  const text = useSelector((state:RootState)=>state.strChange.str)
  const count = useSelector((state:RootState)=>state.increment.counter)

  const [valInput,setValInput] = useState('')

  const changeValInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setValInput(e.target.value)
  }

  const changeValueHandler = () =>{
    dispatch({type:'SET_VALUE',payload:String(valInput).trim()})
  }

  const deleteValueHandler = () =>{
    dispatch({type:'DELETE_VALUE'})
    setValInput('')
  }

  return (
    <div className="secondPage">
      <p>Здесь я могу работать напрямую с данными первой страницы и изменять их</p>
      <div>
        <input type="text" value={valInput} onChange={changeValInput}/>
        <button onClick={changeValueHandler}>Применить</button>
        <button onClick={deleteValueHandler}>Очистить строку</button>
        <span>{text}</span>
      </div>
      <h1>{count}</h1>


    </div>
  );
}

export default SecondPage;
