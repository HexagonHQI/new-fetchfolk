import React, { useState } from 'react';

const RequesterOptions = () => {
    const [item, setItem] = useState('');
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [travelDate, setTravelDate] = useState('');
    const [quantity, setQuantity] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log({
            item,
            origin,
            destination,
            travelDate,
            quantity,
        });
    };

    return (
        <div className="requester-options-section">
            <h2>Requester Options</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Item Needed:
                        <input
                            type="text"
                            value={item}
                            onChange={(e) => setItem(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Origin:
                        <input
                            type="text"
                            value={origin}
                            onChange={(e) => setOrigin(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Destination:
                        <input
                            type="text"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Travel Date:
                        <input
                            type="date"
                            value={travelDate}
                            onChange={(e) => setTravelDate(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Quantity:
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            min="1"
                            required
                        />
                    </label>
                </div>
                <button type="submit">Submit Request</button>
            </form>
        </div>
    );
};

export default RequesterOptions;
