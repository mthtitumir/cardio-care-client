import React from 'react';
import heart from '../../../assets/about us/standing-heart.jpg'
import manPata from '../../../assets/about us/man&pata.jpg'
import { TiTick } from 'react-icons/ti';
import { FiPhoneCall } from 'react-icons/fi';
import TitleButton from '../../../components/TitleButton';


const AboutUs = () => {
    return (
        <>
            {/* left section  */}
            <div className='container mx-auto grid md:grid-cols-2  mt-20'>
                <div className='relative'>
                    <figure className='md:w-3/4'><img className='rounded-xl' src={heart} alt="" /></figure>
                    <figure className='absolute hidden  md:w-1/2 bottom-[50%] md:top-[60%] md:left-[40%]'><img className='rounded-xl' src={manPata} alt="" /></figure>
                </div>

                {/* right section  */}
                <div className='p-5'>
                    <div className='flex justify-center mb-3'>
                        <TitleButton text={"About Us"}></TitleButton>
                    </div>
                    <h2 className='text-5xl text-sky-900 font-semibold text-center mb-5'>Why <span className='text-red-600'>Cardio</span><span className='text-cyan-600'>Care</span> Special</h2>
                    <p className='text-center text-gray-600 font-semibold'>Welcome to Cardio Care, where your heart health is our top priority. Our clinic is a leading institution dedicated to providing comprehensive cardiovascular care to patients of all ages. With a team of highly skilled and experienced cardiologists, nurses, and support staff, we strive to deliver exceptional medical services and personalized treatment plans.</p>

                    {/* services of ours  */}

                    <div className='flex mt-5 justify-between'>
                        <div>
                            <p className='text-lg font-semibold py-1'><TiTick className='text-teal-500 inline text-xl'></TiTick>Hypertension Management</p>
                            <p className='text-lg font-semibold py-1'><TiTick className='text-teal-500 inline text-xl'></TiTick>Coronary Artery Disease Treatment</p>
                            <p className='text-lg font-semibold py-1'><TiTick className='text-teal-500 inline text-xl'></TiTick>Heart Failure Management</p>
                        </div>
                        <div>
                            <p className='text-lg font-semibold py-1'><TiTick className='text-teal-500 inline text-xl'></TiTick>Cardiac Rehabilitation</p>
                            <p className='text-lg font-semibold py-1'><TiTick className='text-teal-500 inline text-xl'></TiTick>Cardiac Imaging and Radiology</p>
                            <p className='text-lg font-semibold py-1'><TiTick className='text-teal-500 inline text-xl'></TiTick>Women's Heart Health Program</p>
                        </div>

                    </div>
                    {/* success percentage  */}
                    <div>
                        <div className='flex justify-between mt-5 mb-1'>
                            <h2 className='text-xl font-semibold'>Successful Patients</h2>
                            <h2 className='text-xl font-semibold'>89%</h2>
                        </div>
                        <progress className="progress progress-success w-full" value="89" max="100"></progress>
                    </div>

                    {/* see more button and contact number  */}

                    <div className='mt-5 flex justify-between items-center'>
                        <div>
                            <button className="bg-teal-500 px-3 py-2 rounded-lg text-white font-semibold">See More</button>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <div>
                                <FiPhoneCall className='text-5xl text-white bg-teal-500 rounded-[50%] p-2'></FiPhoneCall>
                            </div>
                            <div className='text-center'>
                                <h2 className='text-lg font-semibold'>+8801834544437</h2>
                                <h2 className='text-lg font-semibold text-gray-500'>Call us Anytime</h2>

                            </div>

                        </div>

                    </div>

                </div>


            </div>
        </>
    );
};

export default AboutUs;










{/* <div className='flex justify-center mb-3 mt-20'><button className='py-2 px-3 text-cyan-500 font-semibold text-md shadow-lg rounded-lg uppercase drop-shadow-lg'>About Us</button></div> */ }