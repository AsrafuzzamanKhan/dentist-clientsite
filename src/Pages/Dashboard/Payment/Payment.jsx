import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckOutForm';
import Loading from '../../Shared/Loading/Loading';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
console.log('stripe promise: ', stripePromise)

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation()
    const { treatment, price, appointmentDate, slot } = booking

    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    console.log('Booking data:', booking)
    return (
        <div>
            <h2 className='text-3xl'> Payment for {treatment}</h2>
            <p>Please pay{price} for your appointment on{appointmentDate} {slot}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;