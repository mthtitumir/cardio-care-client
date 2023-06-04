import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';

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
                <div className='p-2 rounded-[50%]'>

                    {isHovered ?
                        <Tilt className="parallax-effect" perspective={500}>
                        <div
                            onMouseEnter={handleHover}
                            onMouseLeave={handleLeave}
                            className='relative'>
                            <figure className='w-2/3 mx-auto rounded-[50%] shadow-xl'><img src={photoUrl} alt="Shoes" /></figure>
                            <div className='absolute left-0 right-0 w-1/3 md:w-1/2 mx-auto bottom-10 text-white uppercase'>
                                <Link to='/appointment'><h2 className='text-sm bg-sky-500 text-center py-3 rounded font-semibold'>Book Appointment</h2></Link>
                            </div>
                        </div>
                        </Tilt> :
                        <figure
                            onMouseEnter={handleHover}
                            onMouseLeave={handleLeave}
                            className='w-2/3 mx-auto rounded-[50%] shadow-xl'><img src={photoUrl} alt="Shoes" /></figure>
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