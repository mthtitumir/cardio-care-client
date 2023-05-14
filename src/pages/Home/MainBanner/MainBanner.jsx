import React from 'react';
import banner1 from '../../../assets/banner-carousel/banner1.jpg'
import banner2 from '../../../assets/banner-carousel/banner2.jpg'
import banner3 from '../../../assets/banner-carousel/banner3.jpg'

const MainBanner = () => {
    return (
        <div className="carousel w-full container mx-auto">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full" />
                <div className="absolute h-full flex items-center w-1/2 bg-gradient-to-r from-cyan-800 to-[rgba(21, 21, 21, 0)] pl-10">
                    <div className='text-white space-y-5'>
                        <h2 className='text-6xl font-bold '>Experience compassionate cardiac care</h2>
                        <p className='text-md '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione eum quam quaerat sequi tempora velit commodi error tenetur repellat inventore enim maxime, reiciendis sint laboriosam!</p>
                        <div className='flex gap-4'>
                            <button className="bg-cyan-500 py-2 px-3 rounded-lg text-white uppercase font-semibold text-sm">Read More</button>
                            <button className="bg-red-500 py-2 px-3 rounded-lg text-white uppercase font-semibold text-sm">About Us</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default MainBanner;