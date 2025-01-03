import React, { useState } from 'react';

const ItemRequest = () => {
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle item request submission (e.g., send to backend)
        console.log('Item requested:', item, 'Quantity:', quantity);
        // Reset form
        setItem('');
        setQuantity('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={item}
                onChange={(e) => setItem(e.target.value)}
                placeholder="Enter item you need"
                required
            />
            <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Quantity"
                required
            />
            <button type="submit">Request Item</button>
        </form>
    );
};

export default ItemRequest;