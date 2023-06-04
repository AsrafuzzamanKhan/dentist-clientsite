import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { name, slots, price } = treatment; //treatment is appoinmnet option 

    const date = format(selectedDate, "PP")

    const { user } = useContext(AuthContext)


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
            phone,
            price
        }
        // todo: send data to the server
        // once data is save diplay toste 
        console.log(booking)

        fetch('https://dentist-serversite.vercel.app/bookings', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setTreatment(null)
                    toast.success("Booking Confirmed")
                    refetch()
                }
                else {
                    toast.error(data.message)
                }
            })


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
                        <input name='name' type="text" defaultValue={user?.displayName} disabled className="input w-full input-bordered " />
                        <input name='email' type="email" defaultValue={user?.email} disabled className="input w-full input-bordered" />
                        <input name='phone' type="number" placeholder="Phone number" className="input w-full input-bordered" />
                        <br />
                        <input className=' btn btn-accent w-full' type="submit" value='submit' />
                    </form>
                </div>
            </div>
        </>
    );
};
export default BookingModal;