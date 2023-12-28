import React, { useContext, useEffect, useState } from 'react';

import axios from 'axios';
import { AuthContext } from '../../../providers/AuthProvider';


const Order = () => {
    const { user } = useContext(AuthContext);
    const [userHistory, setUserHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
        <div>
            <h1>User Order History</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {userHistory.length > 0 && (
                <div>
                    <p>Email: {user.email}</p>
                    <ul>
                        {userHistory.map((transaction) => (
                            <li key={transaction._id}>
                                <p>Transaction ID: {transaction.TransactionId}</p>
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
