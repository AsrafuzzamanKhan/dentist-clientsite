import './Banner.css'
import chair from '../../../assets/images/chair.png'
import bgImg from '../../../assets/images/bg.png'
const Banner = () => {
    return (
        <div className="hero min-h-fit my-4 backgroundImg pt-32">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className='w-1/2' alt='banner' />
                <div>
                    <h1 className="text-5xl font-bold">Achiteve Your <br /> Desired Perfect <br />
                        Smile </h1>
                    <p className="py-6">Transform your oral health with personalized treatments, modern technology, and a compassionate team dedicated to creating confident, radiant smiles.</p>
                    {/* <button className=" btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-semibold ">Get Started</button> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;