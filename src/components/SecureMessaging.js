import React, { useState } from 'react';

const SecureMessaging = () => {
    const [message, setMessage] = useState('');

    const handleSend = (e) => {
        e.preventDefault();
        // Handle message sending (e.g., send to backend)
        console.log('Message sent:', message);
        // Reset message input
        setMessage('');
    };

    return (
        <form onSubmit={handleSend}>
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here"
                required
            />
            <button type="submit">Send Message</button>
        </form>
    );
};

export default SecureMessaging;