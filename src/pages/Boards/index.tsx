import React from 'react';
import { FiChevronDown, FiClock, FiHome, FiPlus, FiStar, FiTrello } from 'react-icons/fi';
import Button from '../../components/Button';
import CreateBoardButton from '../../components/CreateBoardButton';
import Header from '../../components/Header';
import MiniCard from '../../components/MiniCard';
import './styles.css';

const Boards: React.FC = () => {
    return (
        <div className='container'>
            <Header/>
            <div className="layout-boards">
                <div className="left-menu">
                    <button className='active'>
                        <FiTrello/>
                        Quadros
                    </button>
                    <button>
                        <FiTrello/>
                        Modelos
                    </button>
                    <button>
                        <FiHome/>
                        Início
                    </button>
                    <div className="workspace">
                        <h1>ÁREA DE TRABALHO</h1>
                        <button>
                            <FiPlus/>
                        </button>
                    </div>
                    <button className="company-workspace">
                        <div className="name">
                            <img src='https://www.citynews1130.com/wp-content/blogs.dir/sites/9/2018/11/26/aws.png' alt='aws'/>
                            <h1>AWS</h1>
                        </div>
                        <button>
                            <FiChevronDown/>
                        </button>
                    </button>
                    <button className="company-workspace">
                        <div className="name">
                            <img src='https://thumbs.dreamstime.com/b/apple-logo-editorial-vetora-illustration-136504827.jpg' alt='apple'/>
                            <h1>Apple</h1>
                        </div>
                        <button>
                            <FiChevronDown/>
                        </button>
                    </button>
                </div>
                <div className="content-home">
                    <div className="destaque-name">
                        <FiStar/>
                        <h1>Quadros com estrelas</h1>
                    </div>

                    <div className="row-cards">
                        <MiniCard
                            name='Technology'
                            time='Apple'
                            color='blue'
                            fav
                        />
                    </div>

                    <div className="destaque-name">
                        <FiClock/>
                        <h1>Visualizado recentemente</h1>
                    </div>
                    
                    <div className="row-cards">
                        <MiniCard
                            name='Technology'
                            time='Apple'
                            color='blue'
                        />
                        <MiniCard
                            name='Design'
                            time='Apple'
                            color='green'
                        />
                        <MiniCard
                            name='Cloud'
                            time='AWS'
                            color='red'
                        />
                    </div>

                    <div className="destaque-name">
                        <div className="init-letter">
                            <h1>Q</h1>
                        </div>
                        <h1>Quadros pessoais</h1>
                    </div>

                    <div className='row-cards'>
                        <CreateBoardButton/>
                    </div>

                    <div className="destaque-name">
                        <div className="init-letter">
                            <h1>A</h1>
                        </div>
                        <h1>AWS</h1>
                        <Button/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Boards;