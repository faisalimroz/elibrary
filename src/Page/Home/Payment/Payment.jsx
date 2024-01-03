import { useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Checkoutform from './Checkoutform';

const stripePromise = loadStripe('pk_test_51NtCtrF2ejzpUbVIh7M8gM8zqN3yqBPZjEqdiaoqpVPEWSbVtAjBwByyYaBkfEtSwBvzhGhy1w0Kcfq1v0T9tacX00KbCLIcnl');
const Payment = () => {
    
    const location = useLocation();
    const totalPrice = new URLSearchParams(location.search).get('totalPrice');
    const id = new URLSearchParams(location.search).get('fid');

    return (
        <div>

            <h1 className='ml-[380px]'> Payment</h1>
            <p className='ml-[380px]'>Total Price: ${totalPrice}</p>
                <Elements stripe={stripePromise }>
                       <Checkoutform totalPrice={totalPrice} id={id}></Checkoutform>
                </Elements>


        </div>
    );
};

export default Payment;