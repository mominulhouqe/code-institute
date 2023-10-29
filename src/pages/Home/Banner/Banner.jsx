import React from 'react';
import img2 from '../../../assets/logo.jpg';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="p-2 mt-24 font-serif bg-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 lg:ml-9">
                    <p className="text-xs text-gray-400 font-semibold mb-2 ">The Most Effective Solution</p>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ">
                        Software Experience With ITEX
                    </h1>
                    <p className="text-base text-gray-400 leading-relaxed mb-2">
                        "ITEX" Company is a dynamic and innovative leader in the [industry] industry. With a rich history of excellence and a commitment to cutting-edge solutions, we have established ourselves as a trusted and forward-thinking organization.
                    </p>
                    <button className="bg-gradient-to-r from-red-500 to-red-600 text-white text-center py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg uppercase flex items-center gap-1 flex-1">
                        Learn More About <FaArrowCircleRight />
                    </button>

                </div>
                <div className="md:w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1441015401724-70d16b783f5c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlY2glMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D"
                        alt=""
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
