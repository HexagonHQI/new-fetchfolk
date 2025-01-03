import React from 'react';

const VideoBackground = ({ videoSource }) => {
    return (
        <div className="video-background">
            <video 
                autoPlay 
                loop 
                muted 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                disablePictureInPicture
            >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* Removed content rendering */}
        </div>
    );
};

export default VideoBackground;