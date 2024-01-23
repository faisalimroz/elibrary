import { useContext, useEffect, useState } from 'react';
import './Fictionbest.css';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../../providers/AuthProvider';
import axios from 'axios';

const Fictionbest = () => {
    const [fiction, setFiction] = useState('');
    const { bfid } = useParams();
    const [members, setMembers] = useState(1);
    const { user } = useContext(AuthContext);
    const name = user.email;
    const [paymentData, setPaymentData] = useState();

    const handleAddMember = () => {
        setMembers(members + 1);
    };

    const handleRemoveMember = () => {
        if (members > 1) {
            setMembers(members - 1);
        }
    };
   const id=bfid
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const totalPrice = members * fiction.price;
        navigate(`/payment?totalPrice=${totalPrice}&email=${name}&id=${id}`);
        console.log('Members:', members);
        console.log('Total Price:', totalPrice);
    };

    useEffect(() => {
        fetch(`http://localhost:5000/bestfiction/${bfid}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch fiction details');
                }
                return response.json();
            })
            .then((data) => {
                setFiction(data);
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [bfid]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/order/${user.email}/${bfid}`);
                setPaymentData(response.data);
                console.log('Payment Data:', response.data.id);
            } catch (error) {
                console.error('Error fetching payment data:', error);
            }
        };

        fetchData();
    }, [name, bfid]);

    return (
        <div>
            {fiction && fiction.name ? (
                <div id='' className="blog  mx-auto ">
                    <div className="blog-div">
                        <figure>
                            <img className='blog-img' src={fiction.img} alt="Shoes" />
                        </figure>
                        <h2 className="blog-title font-bold">{fiction.name}</h2>
                        <h2 className="blog-title font-bold">{fiction.price}</h2>

                        <button type="button" className="bg-yellow-300 mt-1 mb-3 rounded-lg  p-3">
                            <a target="_blank" href={paymentData?.id === bfid ? fiction.pdflink : '#'}>
                                PDF
                            </a>
                        </button>
                        <div className="video-container">
                            {paymentData?.id === bfid ? (
                                <iframe width="420" height="315" src={fiction.videolink} frameborder="0" allowfullscreen></iframe>
                            ) : (
                                <p>Video link disabled</p>
                            )}
                        </div>

                        <form onSubmit={handleSubmit} className="vertical-form">
                            <div className="form-group">
                                <label>Number of Books:</label>
                                <button type="button" onClick={handleRemoveMember}>
                                    -
                                </button>
                                {members}
                                <button type="button" onClick={handleAddMember}>
                                    +
                                </button>
                            </div>
                            <div className="form-group">
                                <p className='text-1xl'>Price per Books: ${members * fiction.price}</p>
                            </div>
                            <div className="form-group">
                                <button className='bg-green-200 p-2 ' type="submit">
                                    Pay
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default Fictionbest;
