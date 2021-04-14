import React, { useCallback, useState } from 'react';
import { FiPlus, FiX } from 'react-icons/fi';
import './styles.css';

const CreateListButton: React.FC = () => {
    const [clicked, setClicked] = useState(false);

    const onFocus = useCallback(() => {
        setClicked(true)
    }, [])

    const onBlur = useCallback(() => {
        setClicked(false)
    }, [])

    return(
        !clicked ? (
            <div className="create-list-button-component" onClick={onFocus}>
                <FiPlus/>
                Adicionar uma lista
            </div>
        ) : (
            <div className="div-create-list-button-component">
                <input placeholder='Insira o título da lista...'/>
                <div>
                    <button>Adicionar lista</button>
                    <button onClick={onBlur}><FiX/></button>
                </div>
            </div>
        )
    );
}

export default CreateListButton;