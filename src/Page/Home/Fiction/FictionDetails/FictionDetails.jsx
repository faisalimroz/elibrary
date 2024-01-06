import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './Fictiodetails.css'
import { AuthContext } from "../../../../providers/AuthProvider";
import axios from "axios";

const FictionDetails = () => {
  const [fiction, setFiction] = useState('')
  const { fid } = useParams();
  const [members, setMembers] = useState(1);
  const [pricePerMember, setPricePerMember] = useState(0);
  const { user } = useContext(AuthContext);
  const name = user.email;
  const [paymentData, setPaymentData] = useState();
  const id = fid;
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
    const totalPrice = members * fiction.price;



    // Redirect to the Payment component with the totalPrice as a URL parameter
    navigate(`/payment?totalPrice=${totalPrice}&&email=${name}&id=${id}`);
    // You can handle form submission here

    console.log('Members:', members);
    console.log('Price per Member:', pricePerMember);
    console.log('Total Price:', totalPrice);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/fiction/${fid}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch fiction details');
        }
        return response.json();
      })
      .then(data => {
        setFiction(data);
      })
      .catch(error => {
        console.log(error);
        // Handle the error, such as showing an error message
      });
  }, [fid]);
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/order/${user.email}/${fid}`);
            setPaymentData(response.data);
            console.log('Payment Data:', response.data.id);
        } catch (error) {
            console.error('Error fetching payment data:', error);
        }
    };

    fetchData();
}, [name, fid]);



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
              <a target="_blank" href={paymentData?.id === fid ? fiction.pdflink : '#'}>
                PDF
              </a>
            </button>
            <div className="video-container">
              {paymentData?.id === fid ? (
                <iframe width="420" height="315" src={fiction.videolink} frameborder="0" allowfullscreen></iframe>
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
              <p className='text-1xl'>Price per Member: ${members * fiction.price}</p>

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

export default FictionDetails; 