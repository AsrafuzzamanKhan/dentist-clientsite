import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import testImg from '../../../assets/images/people1.png'
import Testimonial from './Testimonial';
const Testimonials = () => {
    const Testimonials = [
        {
            _id: 1,
            name: 'M.A. Mazid',
            designation: 'Professor',
            comment: 'Department of Computer Science and Engineering',
            img: testImg

        },
        {
            _id: 2,
            name: 'Ditee Yasmeen',
            designation: 'Assistant Professor',
            comment: 'Department of Computer Science and Engineering',
            img: testImg

        },
        {
            _id: 3,
            name: 'Sanjida Hoque Shoshey',
            designation: 'Lecturer',
            comment: 'Department of Computer Science and Engineering',
            img: testImg

        },
        {
            _id: 4,
            name: 'Tania Sultana',
            designation: 'Lecturer',
            comment: 'Department of Computer Science and Engineering',
            img: testImg

        },
        {
            _id: 5,
            name: 'Md. Rakib Hossain',
            designation: 'Assistant Professor',
            comment: 'Department of Electronics and Communication Engineering',
            img: testImg

        },
        {
            _id: 6,
            name: 'Mohammad Liton Hossain',
            designation: 'Assistant Professor',
            comment: 'Department of Electronics and Communication Engineering',
            img: testImg

        }
    ]
    return (
        <section className='my-16 max-w-[1440px] mx-auto'>
            <div className='flex justify-between'>
                <div className='p-4'>
                    <h4 className='text-xl text-primary font-bold uppercase'>" Testimonials "</h4>

                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-4'>
                {
                    Testimonials.map(test => <Testimonial
                        key={test._id}
                        test={test}
                    ></Testimonial>)
                }
            </div>
        </section>
    );
};

export default Testimonials;