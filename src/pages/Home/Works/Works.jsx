import React from 'react';

const Works = () => {
    const services = [
       
        {
            id: 1,
            category: 'Problem Analysis',
            title: 'Analyzing Complex Problems',
            description: 'We provide problem analysis services to help you identify and understand complex issues.',
            image: 'https://cdn-icons-png.flaticon.com/128/633/633605.png',
        },
        {
            id: 2,
            category: 'Documentation',
            title: 'Comprehensive Documentation',
            description: 'Our documentation services ensure that all your processes and projects are well-documented.',
            image: 'https://cdn-icons-png.flaticon.com/128/3399/3399723.png',
        },
      
        {
            id: 3,
            category: 'Data Backup',
            title: 'Secure Data Backup Solutions',
            description: 'Protect your critical data with our secure and reliable data backup services.',
            image: 'https://cdn-icons-png.flaticon.com/128/2393/2393622.png',
        },
       
        {
            id: 4,
            category: 'Responsive Design',
            title: 'Responsive Web Design',
            description: 'We create responsive designs that adapt to various devices and screen sizes.',
            image: 'https://cdn-icons-png.flaticon.com/128/633/633619.png',
        },
    ];

    return (
        <div className='flex justify-center items-center lg:flex-row flex-col py-12'>
            <div className='lg:w-1/2 w-full p-4'>
                <p className='text-green-500'>WHY CHOOSE US</p>
                <h1 className='text-3xl font-bold mb-4'>We help you to make work easy</h1>
                <p className='text-gray-500'>
                    "We're here to make your work easier. Our mission is to simplify your tasks, streamline your processes, and empower you to focus on what truly matters. With our expertise and innovative solutions, you can achieve more with less effort. Let us help you unlock efficiency and productivity, so you can reach your goals with ease."
                </p>
            </div>
            <div className='lg:w-1/2 w-full p-2'>
                <div className="">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 duration-300 ease-in-out"
                            >
                                <div className="rounded-full flex justify-center items-center">
                                    <img src={service.image} alt={service.category} className="w-8 h-8" />
                                </div>
                                <div className="p-3">
                                    <div className="text-xl font-bold text-green-600 mb-2">{service.category}</div>
                                    <p className="text-sm text-gray-500 mt-2">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;
