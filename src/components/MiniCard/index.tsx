import React from 'react';
import { FiStar } from 'react-icons/fi';
import './styles.css';

interface IMiniCardProps {
    name: string;
    time?: string;
    fav?: boolean;
    color: string;
}

const MiniCard: React.FC<IMiniCardProps> = ({ name, time, fav, color }) => {
    return(
        <div className={`mini-card-component ${color} ${!fav && 'un-fav'}`}>
            <h1>{ name }</h1>
            <div className="footer">
                <h1>{ time }</h1>
                <FiStar/>
            </div>
        </div>
    );
}

export default MiniCard;