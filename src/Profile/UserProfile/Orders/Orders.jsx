import React, { useContext, useEffect, useState } from 'react';

import axios from 'axios';
import { AuthContext } from '../../../providers/AuthProvider';


const Order = () => {
    const { user } = useContext(AuthContext);
    const [userHistory, setUserHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log('user mail', user.email)

    useEffect(() => {
        const fetchUserHistory = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/orders/${user.email}`);
                setUserHistory(response.data); // Set the entire array of transactions
                setLoading(false);
            } catch (error) {
                setError('Error fetching user history');
                setLoading(false);
            }
        };

        fetchUserHistory();
    }, [user.email]);

    return (
        <div className='mt-4' style={{ border: '1px solid black', padding: '10px' }}>
            <h1>User Order History</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {userHistory.length > 0 && (
                <div>
                    <p>Email: {user.email}</p>
                    <ul>
                        {userHistory.map((transaction) => (
                            <li style={{ border: '1px solid black', padding: '5px' }} key={transaction._id}>
                                <p>Transaction ID: {transaction.transactionId}</p>
                                <p>Product ID: {transaction.id}</p>
                                <p>Date: {transaction.date}</p>
                                {/* Add other transaction details you want to display */}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>

    );
};

export default Order;
