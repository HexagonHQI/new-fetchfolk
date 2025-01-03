import React from 'react';
import { Link } from 'react-router-dom';

const Travelers = () => {
    return (
        <div className="travelers-section">
            <h2>For Travelers</h2>
            <p>Travelers can view requests from individuals or businesses looking for items to be carried.</p>
            <Link to="/traveler-options">
                <button className="tab-button">Select Travel Options</button>
            </Link>
        </div>
    );
};

export default Travelers;