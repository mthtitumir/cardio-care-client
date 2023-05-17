import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SingleDoctor = ({ doctor }) => {

    const { docId, photoUrl, name, phone, email, speciality, location, linkedIn } = doctor;
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleLeave = () => {
        setIsHovered(false);
    };
    return (
        <div>
            <div className="card w-full">
                <div className='hover:bg-cyan-500 p-2 rounded-[50%]'>

                    {isHovered ?
                        <div 
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                        className='relative'>
                            <figure className='rounded-[50%]'><img src={photoUrl} alt="Shoes" /></figure>
                            <div className='absolute left-0 right-0 w-1/2 mx-auto bottom-5 text-white uppercase'>
                                <Link to='/appointment'><h2 className='bg-red-500 text-center w-full py-3 rounded font-semibold'>Book Appointment</h2></Link> 
                            </div>
                        </div> :
                        <figure 
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                        className='rounded-[50%]'><img src={photoUrl} alt="Shoes" /></figure>
                    }
                </div>
                <div className=" bg-cyan-50 rounded-2xl shadow-xl mt-3">
                    <h2 className="text-center text-2xl text-sky-900 font-semibold my-3">{name}</h2>
                    <h2 className="text-center text-lg text-cyan-500 uppercase font-semibold my-3">{speciality}</h2>

                </div>
            </div>
        </div>
    );
};

export default SingleDoctor;