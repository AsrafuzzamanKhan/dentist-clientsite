import React, { useState } from 'react';
import chair from '../../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {


    return (
        <header className='pt-32'>
            <div >
                <div className="hero-content flex-col lg:flex-row-reverse gap-4">
                    <img
                        src={chair}
                        className="max-w-sm lg:w-1/2  rounded-lg shadow-2xl"
                    />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;