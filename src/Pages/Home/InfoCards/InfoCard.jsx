import React from 'react';

const InfoCard = ({ card }) => {
    const { name, description, icon, bgClass } = card
    return (
        <div className={`card md:card-side shadow-xl lg:p-4 pt-2 text-white ${bgClass}`}>
            <figure>
                <img className='' src={icon} alt="icon" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default InfoCard;