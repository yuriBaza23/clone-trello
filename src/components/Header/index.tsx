import React from 'react';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { FiBell, FiHome, FiInfo, FiPlus, FiSearch, FiTrello } from 'react-icons/fi';
import './styles.css';

const Header: React.FC = () => {
    return (
        <div className="header-component">
            <div className="left-header-buttons">
                <button className='square-button'>
                    <BsGrid3X3Gap/>
                </button>
                <button className='square-button home'>
                    <FiHome/>
                </button>
                <button className='rectangle-button'>
                    <FiTrello/>
                    <span>Quadros</span>
                </button>
                <div className="input-search">
                    <input placeholder='Ir para...'/>
                    <button>
                        <FiSearch/>
                    </button>
                </div>
            </div>
            <div className="central-header">
                <FiTrello/>
                <h1>Trello</h1>
            </div>
            <div className="right-header-buttons">
                <button className='square-button'>
                    <FiPlus/>
                </button>
                <button className='square-button info'>
                    <FiInfo/>
                </button>
                <button className='square-button'>
                    <FiBell/>
                </button>
                <div className="user-trello">
                    <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2a6bf3c3-ed4e-4d52-85b6-2692a3b8eeac/dd0rqwh-4cd18cc7-699b-4c53-9c35-8b4e3619a9b0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMmE2YmYzYzMtZWQ0ZS00ZDUyLTg1YjYtMjY5MmEzYjhlZWFjXC9kZDBycXdoLTRjZDE4Y2M3LTY5OWItNGM1My05YzM1LThiNGUzNjE5YTliMC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.qU-lr-_mPxY7JnulvOjqm0NzothwQXL5X1s3iwRAXlE' alt='user'/>
                </div>
            </div>
        </div>
    );
}

export default Header;