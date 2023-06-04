import React from 'react';

const ProblemCard = ({problem}) => {
    const {img, title, description} = problem;
    return (
        <div className="rounded border w-full bg-base-100 shadow-xl hover:transition-transform bg-gradient-to-r from-sky-300 to-cyan-100 transition ease-in-out delay-400 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-100 ">
            <figure className='w-1/3 pl-5 pt-4'><img className='text-cyan-500' src={img} alt="cardio" /></figure>
            <div className="card-body">
                <h2 className="card-title text-sky-900 font-semibold">{title}</h2>
                <p className='text-gray-500'>{description}</p>
            </div>
        </div>
    );
};

export default ProblemCard;