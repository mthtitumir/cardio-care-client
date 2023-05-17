import React from 'react';
import Bounce from 'react-reveal/Bounce';
const Doctors = () => {
    return (
        <div className='container mx-auto '>
            <div className='flex justify-center mb-3 mt-20'><button className='py-2 px-3 text-cyan-500 font-semibold text-md shadow-lg rounded-lg uppercase drop-shadow-lg'>Doctors</button></div>
            <h2 className='text-5xl text-sky-900 font-semibold text-center mb-10'>Our Heros</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <Bounce>
                    <img height="300" width="400" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                </Bounce>

            </div>
        </div>
    );
};

export default Doctors;