import React from 'react';
import { FiAlignLeft, FiEye, FiMessageCircle, FiMoreHorizontal, FiSend } from 'react-icons/fi';
import { VscReactions } from 'react-icons/vsc';

import './styles.css';

const SuperCard: React.FC = () => {
    return(
        <div className="super-card-component">
            <div className="preview-card">
                <div className="card">
                    <div className="tags">
                        <div className="tag green">Sprint 1</div>
                    </div>
                    <h2>This is a content</h2>
                    <div className="card-footer">
                        <div className="part-one">
                            <FiEye/>
                            <FiAlignLeft/>
                            <div className="icon-with-number">
                                <FiMessageCircle/>1
                            </div>
                        </div>
                    </div>
                </div>
                <span>Technology | Apple: <span>Done</span></span>
            </div>
            <div className="user">
                <div>
                    <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2a6bf3c3-ed4e-4d52-85b6-2692a3b8eeac/dd0rqwh-4cd18cc7-699b-4c53-9c35-8b4e3619a9b0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMmE2YmYzYzMtZWQ0ZS00ZDUyLTg1YjYtMjY5MmEzYjhlZWFjXC9kZDBycXdoLTRjZDE4Y2M3LTY5OWItNGM1My05YzM1LThiNGUzNjE5YTliMC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.qU-lr-_mPxY7JnulvOjqm0NzothwQXL5X1s3iwRAXlE' alt='user'/>
                    <div className="name">
                        <h1>Yuri Baza</h1>
                        <h2>9 horas atrás (editado)</h2>
                    </div>
                </div>
                <button>
                    <FiMoreHorizontal/>
                </button>
            </div>
            <div className="content">
                <p>This is a comment</p>
            </div>
            <div className="reactions">
                <button>
                    <VscReactions/>
                </button>
            </div>
            <div className="awnser-button">
                <button>
                    <FiSend/>
                    Responder
                </button>
            </div>
        </div>
    );
}

export default SuperCard;