import { useEffect, useState } from 'react';
import './AdminHome.css'
import axios from 'axios';
const AdminHome = () => {
    const [stats, setStats] = useState({
        fictionCollection: 0,
        nonfictionCollection:0,
       novelCollection:0,
       kidsCollection:0,
       biographyCollection:0,
      });
      const [userHistory, setUserHistory] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
    
      useEffect(() => {
        fetch('http://localhost:5000/admin-stats')
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to fetch admin stats');
            }
            return response.json();
          })
          .then(data => {
            setStats(data);
          })
          .catch(error => {
            console.error('Error fetching admin stats:', error);
          });
      }, []);
      useEffect(() => {
        const fetchUserHistory = async () => {
            try {
                const response = await axios.get('http://localhost:5000/allorder');
                setUserHistory(response.data); // Set the entire array of transactions
                setLoading(false);
            } catch (error) {
                setError('Error fetching user history');
                setLoading(false);
            }
        };

        fetchUserHistory();
    }, []);
    
      return (
        <>
          <div className="adminhome-container ">
          <div className="stats shadow bg-green-300 m-2 p-2">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <img className='h-8 w-8 ' src="https://i.ibb.co/nnbKX5W/image.png" alt="Blogs" />
              </div>
              <div className="stat-title">Fiction</div>
              <div className="stat-value">{stats.fictionCollection}</div>
            </div>
          </div>
          <div className="stats shadow bg-green-300 m-2 p-2">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <img className='h-8 w-8 ' src="https://i.ibb.co/nnbKX5W/image.png" alt="Jobs" />
              </div>
              <div className="stat-title">Non Fiction</div>
              <div className="stat-value">{stats.nonfictionCollection}</div>
            </div>
          </div>
          <div className="stats shadow bg-green-300 m-2 p-2">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <img className='h-8 w-8 ' src="https://i.ibb.co/nnbKX5W/image.png" alt="Events" />
              </div>
              <div className="stat-title">Novel</div>
              <div className="stat-value">{stats.novelCollection}</div>
            </div>
          </div>
          <div className="stats shadow bg-green-300 m-2 p-2">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <img className='h-8 w-8 ' src="https://i.ibb.co/nnbKX5W/image.png " alt="Scholarship" />
              </div>
              <div className="stat-title"> Kids </div>
              <div className="stat-value">{stats.kidsCollection}</div>
            </div>
          </div>
          <div className="stats shadow bg-green-300 m-2 p-2">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <img className='h-8 w-8 ' src="https://i.ibb.co/nnbKX5W/image.png" alt="News" />
              </div>
              <div className="stat-title">Biography</div>
              <div className="stat-value">{stats.biographyCollection}</div>
            </div>
          </div>
          
        </div>
        <div>
        <div className='mt-4 mb-4' style={{ border: '1px solid black', padding: '10px' }}>
            <h1>All User Order History</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {userHistory.length > 0 && (
                <div>
                   
                    <ul>
                        {userHistory.map((transaction) => (
                            <li style={{ border: '1px solid black', padding: '5px' }} key={transaction._id}>
                                <p>Transaction ID: {transaction.transactionId}</p>
                                <p>Product ID: {transaction.id}</p>
                                <p>Date: {transaction.date}</p>
                                <p>User: {transaction.user}</p>
                                {/* Add other transaction details you want to display */}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>

        </div>
        </>
      );
};

export default AdminHome;