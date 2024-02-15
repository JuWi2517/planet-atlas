import React from 'react';
import "./PlanetDetail.css"

function PlanetDetail({ description, onClose }) {
    return (
        <div className="planet-detail-modal-backdrop">
            <div className="planet-detail-modal-content">
                <p>{description}</p>
                <button onClick={onClose}>Zavřít</button>
            </div>
        </div>
    );
}

export default PlanetDetail;
