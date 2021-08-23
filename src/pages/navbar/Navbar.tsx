import React from 'react';
import './styles.scss'

function Navbar(){

  return(
    <nav>
          <ul style={{display:'flex',flexDirection: 'row'}}>
            <li>
              <a href="/first">FirstPages</a>
            </li>
            <li>
              <a href="/second">SecondPages</a>
            </li>
            <li>
              <a href="/third">ThirdPages</a>
            </li>
          </ul>
    </nav>

  );

}
export default Navbar;