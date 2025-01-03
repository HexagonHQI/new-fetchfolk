import React from 'react';
import profileImage from '../assets/profile.jpg'; // Adjust the path accordingly

const UserProfile = () => {
    return (
        <div>
            <img src={profileImage} alt="User " style={{ width: '100px', borderRadius: '50%' }} />
            <h3>User Information</h3>
            <p>Name: John Doe</p>
            <p>Email: johndoe@example.com</p>
        </div>
    );
};

export default UserProfile;