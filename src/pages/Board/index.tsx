import React from 'react';
import Header from '../../components/Header';
import HeaderBoard from '../../components/HeaderBoard';

import './styles.css';

const Board: React.FC = () => {
  return(
    <div className="container">
      <Header/>
      <HeaderBoard/>
    </div>
  );
}

export default Board;