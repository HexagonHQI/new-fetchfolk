import React, { useState } from 'react';

const TravelerOptions = () => {
    const [departureCountry, setDepartureCountry] = useState('');
    const [destinationCountry, setDestinationCountry] = useState('');
    const [travelDate, setTravelDate] = useState('');
    const [flightHour, setFlightHour] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the submission logic here
        console.log({
            departureCountry,
            destinationCountry,
            travelDate,
            flightHour,
        });
    };

    return (
        <div className="traveler-options-section">
            <h2>Traveler Options</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Country of Departure:
                        <input
                            type="text"
                            value={departureCountry}
                            onChange={(e) => setDepartureCountry(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Country of Destination:
                        <input
                            type="text"
                            value={destinationCountry}
                            onChange={(e) => setDestinationCountry(e.target.value)}
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
                        Flight Hour:
                        <input
                            type="time"
                            value={flightHour}
                            onChange={(e) => setFlightHour(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default TravelerOptions;