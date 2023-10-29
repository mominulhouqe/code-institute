import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Clients = () => {


    const [variableWidth, setVariableWidth] = useState(false);

    useEffect(() => {
        // Check the screen width and enable variableWidth for larger screens
        const updateVariableWidth = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 768) {
                setVariableWidth(true);
            } else {
                setVariableWidth(false);
            }
        };

        // Initial check
        updateVariableWidth();

        // Attach event listener for window resize
        window.addEventListener('resize', updateVariableWidth);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', updateVariableWidth);
        };
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToScroll: 2,
        centerMode: true,
        variableWidth: variableWidth,
    };

    // const settings = {
    //     centerMode: true,
    //     centerPadding: '60px',
    //     slidesToShow: 3,
    //     responsive: [
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 arrows: false,
    //                 centerMode: true,
    //                 centerPadding: '40px',
    //                 slidesToShow: 3,
    //             },
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 arrows: false,
    //                 centerMode: true,
    //                 centerPadding: '40px',
    //                 slidesToShow: 1,
    //             },
    //         },
    //     ],
    // };

    const feedbackData = [
        {
            image: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
            name: 'Sarah Johnson',
            address: '123 Oak Street, New York, USA',
            feedback:
                "I'm extremely satisfied with the quality of service. The team's professionalism and dedication are exceptional.",
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
            name: 'Robert Smith',
            address: '456 Maple Avenue, Los Angeles, USA',
            feedback:
                'Working with this company has been a great experience. They delivered outstanding results on time.',
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/128/8457/8457561.png',
            name: 'Emma Wilson',
            address: '789 Elm Road, Chicago, USA',
            feedback:
                'The customer support is top-notch, and I appreciate the prompt responses to my inquiries.',
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/128/4140/4140048.png',
            name: 'Michael Davis',
            address: '101 Birch Lane, Miami, USA',
            feedback:
                'I highly recommend this service. They exceeded my expectations and provided excellent solutions.',
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
            name: 'Sophia Lee',
            address: '202 Cedar Court, San Francisco, USA',
            feedback:
                "The team's attention to detail and creative approach make them stand out in the industry.",
        },
    ];

    return (
        <div className="client-satisfaction">
            <Slider {...settings}>
                {feedbackData.map((item, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg shadow-lg text-center">
                        <img
                            src={item.image}
                            alt="Client"
                            className="w-32 h-32 mx-auto mb-4 rounded-full"
                        />
                        <p className="text-gray-800">{item.feedback}</p>
                        <div className="text-gray-600 mt-2">
                            <p className="font-semibold">{item.name}</p>
                            <address>{item.address}</address>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Clients;
