import React from 'react';
import { useSelector } from 'react-redux';
import './styles.css';

function ThirdPage() {

  const state = useSelector(state=>state)


  return (
    <div className="thirdPage">
      <h1>Это моя третья страничка для вывода всего состояния</h1>
      <span>{JSON.stringify(state,null,'\t')}</span>
    </div>
  );
}

export default ThirdPage;
