import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../../providers/AuthProvider';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const Biographybest = () => {
    const [biography, setbiography] = useState('')
    const { nfid } = useParams();
    const [members, setMembers] = useState(1);
    const [pricePerMember, setPricePerMember] = useState(0);
    const { user } = useContext(AuthContext);
    const [paymentData, setPaymentData] = useState();
    const name = user.email;

    const handleAddMember = () => {
        setMembers(members + 1);
    };


    const handleRemoveMember = () => {
        if (members > 1) {
            setMembers(members - 1);
        }
    };
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        // Calculate the total price based on the number of members and price per member
        const totalPrice = members * biography.price;

        
   const id=nfid

        // Redirect to the Payment component with the totalPrice as a URL parameter
        navigate(`/payment?totalPrice=${totalPrice}&&email=${name}&id=${id}`);
        // You can handle form submission here

        console.log('Members:', members);
        console.log('Price per Member:', pricePerMember);
        console.log('Total Price:', totalPrice);
    };

    useEffect(() => {
        fetch(`http://localhost:5000/bestbiography/${nfid}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch biography details');
                }
                return response.json();
            })
            .then(data => {
                setbiography(data);
                console.log(data)
            })
            .catch(error => {
                console.log(error);
                // Handle the error, such as showing an error message
            });
    }, [nfid]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/order/${user.email}/${nfid}`);
                setPaymentData(response.data);
                console.log('Payment Data:', response.data.id);
            } catch (error) {
                console.error('Error fetching payment data:', error);
            }
        };

        fetchData();
    }, [name, nfid]);




    return (
        <div>
            {biography && biography.name ? (
                <div id='' className="blog  mx-auto ">
                    <div className="blog-div">
                        <figure>
                            <img className='blog-img' src={biography.img} alt="Shoes" />
                        </figure>
                        <h2 className="blog-title font-bold">{biography.name}</h2>
                        <h2 className="blog-title font-bold">{biography.price}</h2>

                        <button type="button" className="bg-yellow-300 mt-1 mb-3 rounded-lg  p-3">
                            <a target="_blank" href={paymentData?.id === nfid ? biography.pdflink : '#'}>
                                PDF
                            </a>
                        </button>
                        <div className="video-container">
                            {paymentData?.id === nfid ? (
                                <iframe width="420" height="315" src={biography.videolink} frameborder="0" allowfullscreen></iframe>
                            ) : (
                                <p>Video link disabled</p>
                            )}
                        </div>

                    </div>

                    <form onSubmit={handleSubmit} className="vertical-form">
                        <div className="form-group">
                            <label>Number of Members:</label>
                            <button type="button" onClick={handleRemoveMember}>-</button>
                            {members}
                            <button type="button" onClick={handleAddMember}>+</button>
                        </div>
                        <div className="form-group">
                            <p className='text-1xl'>Price per Books: ${members * biography.price}</p>

                        </div>
                        <div className="form-group">
                            <button className='bg-green-200 p-2 ' type="submit">Pay</button>
                        </div>
                    </form>
                </div>
            ) : (
                <div>Loading...</div>
            )}

        </div>

    );
};

export default Biographybest;