import React from 'react';
import './Banner.css'
import chair from '../../../assets/images/chair.png'
import bgImg from '../../../assets/images/bg.png'
const Banner = () => {
    return (
        <div className="hero min-h-fit my-4 backgroundImg">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className='w-1/2' alt='banner' />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className=" btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-semibold ">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;