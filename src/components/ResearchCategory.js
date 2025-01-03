import React from 'react';

const ResearchCategory = ({ type }) => {
    return (
        <div className="research-category-section">
            <h2>Research Category: {type}</h2>
            <p>
                Here you can find all the relevant information and options for {type}. 
                This section will help you connect with others based on your needs.
            </p>
            {/* Add functionality to display relevant items or travelers/requesters */}
        </div>
    );
};

export default ResearchCategory;