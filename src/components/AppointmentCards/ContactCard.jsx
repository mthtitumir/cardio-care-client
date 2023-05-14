import React from 'react';
import { BiPhoneCall} from 'react-icons/bi';
import { HiOutlineMailOpen} from 'react-icons/hi';
import { GrLocation} from 'react-icons/gr';


const ContactCard = () => {
    return (
        <div className=''>
            <h2 className='text-4xl text-cyan-800 font-semibold my-10'>Contact With Us</h2>
            <div className='mb-7 flex gap-8 items-center'>
                <BiPhoneCall className='text-7xl bg-cyan-500 rounded-[50%] p-4 text-white'></BiPhoneCall>
                <div className='space-y-4'>
                    <h2 className='text-2xl font-semibold text-cyan-800'>Phone</h2>
                    <p className='text-xl font-semibold'>+8801834544437</p>
                </div>
            </div>
            <div className='mb-7 flex gap-8 items-center'>
                <HiOutlineMailOpen className='text-7xl bg-cyan-500 rounded-[50%] p-4 text-white'></HiOutlineMailOpen>
                <div className='space-y-4'>
                    <h2 className='text-2xl font-semibold text-cyan-800'>Email</h2>
                    <p className='text-xl font-semibold'>titumirgccc@gmail.com</p>
                </div>
            </div>
            <div className='mb-7 flex gap-8 items-center'>
                <GrLocation className='text-7xl bg-cyan-500 rounded-[50%] p-4 text-white'></GrLocation>
                <div className='space-y-4'>
                    <h2 className='text-2xl font-semibold text-cyan-800'>Location</h2>
                    <p className='text-xl font-semibold'>Chattogram, Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;