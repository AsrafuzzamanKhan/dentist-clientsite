import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
console.log(stripePromise)
const Payment = () => {
    const booking = useLoaderData();
    const { treatment, price, appointmentDate, slot } = booking
    console.log('Booking data:', booking)
    return (
        <div>
            <h2 className='text-3xl'> Payment for {booking.treatment}</h2>
            <p>Please pay{booking.price} for your appointment on{appointmentDate} {slot}</p>
        </div>
    );
};

export default Payment;