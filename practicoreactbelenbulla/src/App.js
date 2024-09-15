import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import Modal from './Modal';

function App() {
    const [isModalActive, setIsModalActive] = useState(false);
    const [items, setItems] = useState([]);

    const handleAddClick = () => {
        setIsModalActive(true);
    };

    const handleCloseModal = () => {
        setIsModalActive(false);
    };

    const handleSaveItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return (
        <div className="container mt-6">
            <h1 className="title">Lista de Elementos</h1>
            <button className="button is-primary mb-4" onClick={handleAddClick}>
                Agregar
            </button>

            <ul>
                {items.map((item, index) => (
                    <li key={index} className="box">{item}</li>
                ))}
            </ul>

            <Modal
                isActive={isModalActive}
                onClose={handleCloseModal}
                onSave={handleSaveItem}
            />
        </div>
    );
}

export default App;
