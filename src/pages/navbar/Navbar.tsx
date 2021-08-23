/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.scss'

function Navbar(){
  const history = useHistory()
  return(
    <nav>
          <ul style={{display:'flex',flexDirection: 'row'}}>
            <li>
              <a onClick={()=>history.push('/first')}>FirstPages</a>
            </li>
            <li>
              <a onClick={()=>history.push('/second')}>SecondPages</a>
            </li>
            <li>
              <a onClick={()=>history.push('/third')}>ThirdPages</a>
            </li>
          </ul>
    </nav>

  );

}
export default Navbar;