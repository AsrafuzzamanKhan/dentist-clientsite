import React from 'react';

const AppointmentOption = ({ option, setTreatment }) => {
    const { name, slots } = option;
    return (
        <div className="card bg-base-100 shadow-xl ">
            <div className="card-body text-center">
                <h2 className="text-3xl text-primary text-center">{name}!</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try next'}</p>
                <p>{slots.length}{slots.length > 1 ? "spaces" : 'space'} available</p>
                <div className="card-actions justify-center">

                    <label htmlFor="booking-modal" className="btn"
                        onClick={() => setTreatment(option)}
                    >
                        Book appointment
                    </label>

                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;