import React from 'react';
import Banner from '../Banner/Banner';
import Infocards from '../InfoCards/Infocards';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Infocards></Infocards>
            <Services></Services>
        </div>
    );
};

export default Home;