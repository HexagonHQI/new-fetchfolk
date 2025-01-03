import React from 'react';
import { Link } from 'react-router-dom';

const Requesters = () => {
    return (
        <div className="requesters-section">
            <h2>Requesters</h2>
            <p>As a requester, you can find travelers who are willing to carry your items. Please specify your needs below.</p>
            <Link to="/requester-options">
                <button className="requester-button">Post a Request</button>
            </Link>
        </div>
    );
};

export default Requesters;