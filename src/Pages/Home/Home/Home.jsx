import React from 'react';
import Banner from '../Banner/Banner';
import Infocards from '../InfoCards/Infocards';
import Services from '../Services/Services';
import Testimonials from '../Testimonals/Testimonials';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Infocards></Infocards>
            <Services></Services>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;