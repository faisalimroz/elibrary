import  { useEffect, useState } from 'react';
import { useContext } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import './Checkoutform.css';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import { AuthContext } from '../../../providers/AuthProvider';



const Checkoutform = ({ totalPrice, id}) => {
    const { user } = useContext(AuthContext)
    const name=user.email;
    
    console.log('pronle',name)
    console.log(totalPrice)
    const [clientSecret, setClientSecret] = useState('')
    const stripe = useStripe();
    const [processing,setProcessing]=useState(false)
    const elements = useElements();
    const [cardError, setCardError] = useState('')

    const [transactionId,setTransactionId]=useState('')
    const token = localStorage.getItem('access-token');
    const [axiosSecure] =useAxiosSecure()
    // Use useEffect to fetch the clientSecret when the component mounts
    useEffect(() => {
        // Replace 'YOUR_STRIPE_API_KEY' with your actual Stripe API key
        // const stripeApiKey = 'sk_test_51NtCtrF2ejzpUbVI0D61WSBe8TSrr08Hvibewlcu8LLfAHrmOjV8aXmPT2FXbfhMMgSzO4y2wV461Nk1A25EJ12T000CuL1UR1';
      
        // Include the Bearer token in the request headers
        axiosSecure.post('/create-payment-intent', { totalPrice,name, id }, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
        .then(res => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        })
      }, [ totalPrice,name, id ]);// Empty dependency array means this effect runs once when the component mounts

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error,paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError('')
            // console.log('payment method',paymentMethod)
        }
        setProcessing(true)
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: user?.email ||  'annonymous',
                },
              },
            },
          );
          if(confirmError){
            console.log(confirmError)
          }
          console.log('paymentIntent',paymentIntent)
          setProcessing(false)

          if(paymentIntent.status==='succeeded'){
            setTransactionId(paymentMethod.id)
            const transactionId=paymentIntent.id
            const payment={
             
              transactionId:transactionId,
              date: new Date(),
              orderStatus: 'service pending',
              user:name,
              id:id,

            
            }
            axiosSecure.post('/payments',payment)
            .then(res=>{
              console.log(res.data);
              if(res.data.insertId){
                //display
              }
            })
          }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className='w-2/3 mt-3'>
                <CardElement id='input'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />

                <button type="submit" id='pay-btn' className="btn btn-outline btn-primary mt-4 btn-sm" disabled={!stripe || !clientSecret || processing}>
                    Pay {totalPrice}
                </button>
            </form>
            {cardError && <p className='text-red-400'>{cardError}</p>}
            {transactionId && <p className='text-green-500 ml-[380px]'>Transaction complete with transactionId:{transactionId}</p>}
        </>
    );
};

export default Checkoutform;