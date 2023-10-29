import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Sliders = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="w-full mx-auto my-8">
      <Slider {...settings}>
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2glMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D" alt="Image 1" className="w-full" />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50">
            Slide 1
          </div>
        </div>
        <div className="relative">
          <img src="image2.jpg" alt="Image 2" className="w-full" />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50">
            Slide 2
          </div>
        </div>
        <div className="relative">
          <img src="image3.jpg" alt="Image 3" className="w-full" />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50">
            Slide 3
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Sliders;
