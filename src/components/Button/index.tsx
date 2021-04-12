import React from 'react';
import { FiBriefcase } from 'react-icons/fi';
import './styles.css';

interface IButtonProps {
  text: string;
  brief?: boolean;
}

const Button: React.FC<IButtonProps> = ({ children, text, brief }) => {
  return(
    <button className={`button-component ${brief && 'brief'}`}>
      { brief ? (
        <div className="brief-case">
          <FiBriefcase/>
        </div>
      ) : children }
      <span>{text}</span>
    </button>
  );
}

export default Button;