import React from 'react';
import { FiChevronDown, FiMoreHorizontal, FiPlus, FiStar, FiTrello, FiUsers } from 'react-icons/fi';
import './styles.css';

const HeaderBoard: React.FC = () => {
    return(
        <div className="header-board-component">
            <div className="one">
                <button className="with-icon">
                    <FiTrello/>
                    Quadros
                    <FiChevronDown className='second-icon'/>
                </button>
                <input value='New'/>
                <button className="only-icon">
                    <FiStar/>
                </button>

                <div className="vetical-divider"/>

                <button className="with-icon">
                    <img src='https://thumbs.dreamstime.com/b/apple-logo-editorial-vetora-illustration-136504827.jpg' alt='apple'/>
                    Apple
                    <div>Free</div>
                </button>

                <div className="vetical-divider"/>

                <button className="with-icon">
                    <FiUsers/>
                    Visível à Área de trabalho
                </button>

                <div className="vetical-divider"/>

                <div className="team">
                    <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2a6bf3c3-ed4e-4d52-85b6-2692a3b8eeac/dd0rqwh-4cd18cc7-699b-4c53-9c35-8b4e3619a9b0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMmE2YmYzYzMtZWQ0ZS00ZDUyLTg1YjYtMjY5MmEzYjhlZWFjXC9kZDBycXdoLTRjZDE4Y2M3LTY5OWItNGM1My05YzM1LThiNGUzNjE5YTliMC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.qU-lr-_mPxY7JnulvOjqm0NzothwQXL5X1s3iwRAXlE' alt='user'/>
                </div>

                <button className="only-text">
                    Convidar
                </button>
            </div>

            <div className="two">
                <button className="with-icon">
                    <FiPlus/>
                    Butler (1 Tip)
                </button>

                <button className="with-icon">
                    <FiMoreHorizontal/>
                    Mostrar menu
                </button>
            </div>
        </div>
    );
}

export default HeaderBoard;