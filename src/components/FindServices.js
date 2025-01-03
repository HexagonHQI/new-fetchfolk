import React from 'react';
import { Link } from 'react-router-dom';

const FindServices = () => {
    return (
        <div className="find-services-section">
            <h2>Find Services Section</h2>
            <div className="tabs">
                <Link to="/traveler-options">
                    <button className="tab-button">For Travelers</button>
                </Link>
                <Link to="/requesters">
                    <button className="tab-button">For Requesters</button>
                </Link>
            </div>

            <div className="traveler-section">
                <h3>For Travelers</h3>
                <p>Travelers can view requests from individuals or businesses looking for items to be carried.</p>
                <h4>Filters:</h4>
                <ul>
                    <li>Origin: Where the traveler is coming from.</li>
                    <li>Date: The travel date.</li>
                    <li>Capacity: How much they can carry (according to the laws of import/export of the precise country).</li>
                </ul>
                <h4>Features:</h4>
                <ul>
                    <li>Search Bar: A dynamic search to look for specific requests.</li>
                    <li>Profiles and Ratings: Display user profiles with ratings and reviews to build trust.</li>
                    <li>Posting Options: Buttons to post a request ("I can bring something").</li>
                </ul>
            </div>

            <div className="requester-section">
                <h3>For Requesters</h3>
                <p>Individuals or businesses looking for travelers can browse profiles of people offering their services to carry items.</p>
                <h4>Filters:</h4>
                <ul>
                    <li>Origin: Where the traveler is coming from.</li>
                    <li>Date: The travel date.</li>
                    <li>Capacity: How much they can carry (according to the laws of import/export of the precise country).</li>
                </ul>
                <h4>Features:</h4>
                <ul>
                    <li>Search Bar: A dynamic search to look for specific services or items.</li>
                    <li>Profiles and Ratings: Display user profiles with ratings and reviews to build trust.</li>
                    <li>Posting Options: Buttons to post a request ("I need something").</li>
                </ul>
            </div>

            <div className="fees-section">
                <h3>Fees Structure</h3>
                <p>FetchFolk charges a service fee based on the distance and quantity of items being transported:</p>
                <ul>
                    <li>For distances up to 500 miles: $10 per item.</li>
                    <li>For distances between 501 and 1000 miles: $20 per item.</li>
                    <li>For distances over 1000 miles: $30 per item.</li>
                    <li>Additional fees may apply based on the quantity of items being carried.</li>
                </ul>
                <p>These fees help us maintain the platform and ensure a reliable service for all users.</p>
            </div>
        </div>
    );
};

export default FindServices;