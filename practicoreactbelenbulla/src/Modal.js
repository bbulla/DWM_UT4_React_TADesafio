import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';

function Modal({ isActive, onClose, onSave }) {
    const [inputValue, setInputValue] = useState('');

    const handleSave = () => {
        if (inputValue.trim() !== '') {
            onSave(inputValue);
            setInputValue('');
            onClose();
        }
    };

    const handleCancel = () => {
        setInputValue('');
        onClose();
    };

    return (
        <div className={`modal ${isActive ? 'is-active' : ''}`}>
            <div className="modal-background" onClick={handleCancel}></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Agregar Texto</p>
                    <button className="delete" onClick={handleCancel}></button>
                </header>
                <section className="modal-card-body">
                    <input
                        className="input"
                        type="text"
                        placeholder="Ingrese texto"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success" onClick={handleSave}>Guardar</button>
                    <button className="button" onClick={handleCancel}>Cancelar</button>
                </footer>
            </div>
        </div>
    );
}

export default Modal;
