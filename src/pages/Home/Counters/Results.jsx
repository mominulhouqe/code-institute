import React, { useEffect } from 'react';
import Counter from './Counters';
import 'aos/dist/aos.css'; // Import the AOS CSS
import AOS from 'aos';

const Results = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Adjust the duration of the animations as needed
    });
  }, []); // Initialize AOS only once when the component mounts

  return (
    <div>
      <div className=" p-8 bg-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 shadow-md text-center" data-aos="fade-up">
            <p className="text-lg text-gray-600 uppercase">Project Done</p>
            <div className="flex items-center justify-center gap-2 font-semibold">
              <Counter end={100} duration={3} />
              <span>+</span>
            </div>
          </div>
          <div className="bg-white p-4 shadow-md text-center" data-aos="fade-up">
            <p className="text-lg text-gray-600 uppercase">user worldwide</p>
            <div className="flex items-center justify-center gap-2 font-semibold">
              <Counter end={250} duration={4} />
              <span>M +</span>
            </div>
          </div>
          <div className="bg-white p-4 shadow-md text-center" data-aos="fade-up">
            <p className="text-lg text-gray-600 uppercase ">avaible country</p>
            <div className="font-semibold">
              <Counter end={35} duration={5} />
            </div>
          </div>
          <div className="bg-white p-4 shadow-md text-center" data-aos="fade-up">
            <p className="text-lg text-gray-600 uppercase">Award winng</p>
            <div className="font-semibold">
              <Counter end={5} duration={6} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
