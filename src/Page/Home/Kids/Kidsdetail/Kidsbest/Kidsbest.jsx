import { useContext, useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../../../providers/AuthProvider';
const Kidsbest = () => {
    const [kids, setkids] = useState('')
    const { bkid } = useParams();
    const [members, setMembers] = useState(1);
    const [pricePerMember, setPricePerMember] = useState(0);
    const { user } = useContext(AuthContext);
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
        const totalPrice = members * kids.price;



        // Redirect to the Payment component with the totalPrice as a URL parameter
        navigate(`/payment?totalPrice=${totalPrice}&&email=${name}`);
        // You can handle form submission here

        console.log('Members:', members);
        console.log('Price per Member:', pricePerMember);
        console.log('Total Price:', totalPrice);
    };

    useEffect(() => {
        fetch(`http://localhost:5000/bestkids/${bfid}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch kids details');
                }
                return response.json();
            })
            .then(data => {
                setkids(data);
                console.log(data)
            })
            .catch(error => {
                console.log(error);
                // Handle the error, such as showing an error message
            });
    }, [bkid]);




    return (
        <div>
            {kids && kids.name ? (
                <div id='' className="blog  mx-auto ">
                    <div className="blog-div">
                        <figure>
                            <img className='blog-img' src={kids.img} alt="Shoes" />
                        </figure>
                        <h2 className="blog-title font-bold">{kids.name}</h2>
                        <h2 className="blog-title font-bold">{kids.price}</h2>

                        <button type="button" className="bg-green-300 p-3"><a target="_blank" href={kids.pdflink}>PDF</a></button>
                         <div className="video-container">
                            <iframe width="420" height="315" src="https://www.youtube.com/embed/lNKwpvzdHik?si=G4AcOZynGLzZ_jc2" title="YouTube video player"frameborder="0" allowfullscreen></iframe>
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
                            <p className='text-1xl'>Price per Member: ${members * kids.price}</p>

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


export default  Kidsbest;