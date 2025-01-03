import React from 'react';
import UserProfile from '../components/UserProfile'; // Import the UserProfile component
import 'animate.css'; // Import Animate.css

const Profile = () => {
    return (
        <div className="profile-container mt-4"> {/* Apply the profile-container class here */}
            <div className="animate__animated animate__fadeIn"> {/* Add animation classes here */}
                <h2>Your Profile</h2>
                <User Profile /> {/* Correctly render the UserProfile component */}
            </div>
        </div>
    );
};

export default Profile;