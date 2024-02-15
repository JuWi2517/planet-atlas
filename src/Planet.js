import React, { useState } from 'react';
import PlanetDetail from './PlanetDetail';
import "./Planet.css"

function Planet({ name, description }) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => setIsModalVisible(true);
    const closeModal = () => setIsModalVisible(false);

    return (
        <div className="planet">
            <img src={`/img/${name.toLowerCase()}.png`} alt={name} className="planet-image" />
            <div className="planet-name">{name}</div>
            <button onClick={showModal}>Zobrazit detaily</button>
            {isModalVisible && <PlanetDetail description={description} onClose={closeModal} />}
        </div>
    );
}

export default Planet;
