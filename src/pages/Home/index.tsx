import React from 'react';
import { FiChevronDown, FiClock, FiHeart, FiHome, FiPlus, FiStar, FiTrello } from 'react-icons/fi';
import Header from '../../components/Header';
import SuperCard from '../../components/SuperCard';
import './styles.css';

const Home: React.FC = () => {
    return (
        <div className='container'>
            <Header/>
            <div className="layout-home">
                <div className="left-menu">
                    <button>
                        <FiTrello/>
                        Quadros
                    </button>
                    <button>
                        <FiTrello/>
                        Modelos
                    </button>
                    <button className='active'>
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
                        <FiHeart/>
                        <h1>DESTAQUES DA ÁREA DE TRABALHO</h1>
                    </div>
                    <div className="card-prpg">
                        <img src='https://a.trellocdn.com/prgb/dist/images/home/orientation/highlights.6841b60bdc0a1588b82b.svg' alt='trello imagem'/>
                        <div className="content">
                            <h1>Destaques</h1>
                            <h2>Fique em dia com as atividades de suas Áreas de trabalho e seus quadros.</h2>
                            <button>Entendi! Descarte isso.</button>
                        </div>
                    </div>
                    <SuperCard/>
                    <SuperCard/>
                    <SuperCard/>
                    <button className='show-more'>Mostrar mais atividades</button>
                </div>
                <div className="right-menu">
                    <div className="favs-workspace">
                        <FiStar/>
                        <h1>MARCADO COM ESTRELA</h1>
                    </div>
                    <div className="div-workspace star">
                        <div className="name-one">
                            <div className="color-square blue"/>
                            <div className="name">
                                <h1>Technology</h1>
                                <h2>Apple</h2>
                            </div>
                        </div>
                        <button>
                            <FiStar/>
                        </button>
                    </div>
                    <div className="favs-workspace two">
                        <FiClock/>
                        <h1>VISUALIZADO RECENTEMENTE</h1>
                    </div>
                    <div className="div-workspace">
                        <div className="name-one">
                            <div className="color-square blue"/>
                            <div className="name">
                                <h1>Technology</h1>
                                <h2>Apple</h2>
                            </div>
                        </div>
                        <button className='star-button'>
                            <FiStar/>
                        </button>
                    </div>
                    <div className="div-workspace">
                        <div className="name-one">
                            <div className="color-square green"/>
                            <div className="name">
                                <h1>Design</h1>
                                <h2>Apple</h2>
                            </div>
                        </div>
                        <button className='star-button'>
                            <FiStar/>
                        </button>
                    </div>
                    <div className="div-workspace">
                        <div className="name-one">
                            <div className="color-square red"/>
                            <div className="name">
                                <h1>Cloud</h1>
                                <h2>AWS</h2>
                            </div>
                        </div>
                        <button className='star-button'>
                            <FiStar/>
                        </button>
                    </div>
                    <div className="favs-workspace two">
                        <h1>LINKS</h1>
                    </div>
                    <div className="create">
                        <button>
                            <FiPlus/>
                        </button>
                        Criar um quadro
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;