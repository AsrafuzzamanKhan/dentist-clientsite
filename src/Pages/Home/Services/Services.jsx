import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const serviceData = [
        {
            id: 1,
            name: 'Fluoride TreateMent',
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
            icon: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
            icon: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
            icon: whitening
        }

    ]
    return (
        <div className=''>
            <div className='container mx-auto'>
                <div className='my-8  text-center gap-y-[10px]'>
                    <h5 className='text-primary text-xl font-semibold uppercase mb-5'>Our Services</h5>
                    <h2 className='text-4xl'>Services We Provide</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-8'>
                    {
                        serviceData.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>

                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default Services;