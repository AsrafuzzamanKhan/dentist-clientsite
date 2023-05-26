import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name, slots } = treatment; //treatment is appoinmnet option 

    const date = format(selectedDate, "PP")

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const slot = form.slot.value;
        const phone = form.phone.value;
        const booking = {
            appointmentDate: date,
            // name: name
            treatment: treatment.name,
            patient: name,
            slot,
            email,
            phone
        }
        // todo: send data to the server
        // obce data is save diplay toste 
        console.log(booking)
        setTreatment(null);
    }
    return (
        <>
            {/* The button to open modal */}
            {/* <label htmlFor="booking-modal" className="btn">open modal</label> */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full input-bordered" />
                        <select name='slot' className="select select-bordered w-full ">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot} > {slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Name " className="input w-full input-bordered " />
                        <input name='email' type="email" placeholder="Email address" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Phone number" className="input w-full input-bordered" />
                        <br />
                        <input className=' btn btn-accent w-full' type="submit" value='submit' />
                    </form>
                </div>
            </div>
        </>
    );
};
export default BookingModal;