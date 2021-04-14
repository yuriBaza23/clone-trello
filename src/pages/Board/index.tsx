import React from 'react';
import CreateListButton from '../../components/CreateListButton';
import Header from '../../components/Header';
import HeaderBoard from '../../components/HeaderBoard';

import './styles.css';

const Board: React.FC = () => {
  return(
    <div className="container">
      <Header/>
      <HeaderBoard/>
      <div className="board-content">
        <CreateListButton/>
      </div>
    </div>
  );
}

export default Board;