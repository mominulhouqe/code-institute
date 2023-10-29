import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const items = [
    {
        id: 1,
        label: 'Project 1',
        title: 'E-commerce Website',
        description: 'A full-featured e-commerce website built using the MERN stack.',
        image: 'https://cdn-icons-png.flaticon.com/128/633/633605.png',
        githubLink: 'https://github.com/your-username/project1',
        liveDemoLink: 'https://your-project1-demo.com',
        price: '$499',
        review: '5.0 (25 reviews)',
    },
    {
        id: 2,
        label: 'Project 2',
        title: 'Social Media App',
        description: 'A social media application developed with the MERN stack for sharing posts and connecting with friends.',
        image: 'https://cdn-icons-png.flaticon.com/128/2393/2393622.png',
        githubLink: 'https://github.com/your-username/project2',
        liveDemoLink: 'https://your-project2-demo.com',
        price: '$599',
        review: '5.0 (245 reviews)',
    },
    {
        id: 3,
        label: 'Project 3',
        title: 'Task Management System',
        description: 'A task management system with user authentication and task tracking developed using the MERN stack.',
        image: 'https://cdn-icons-png.flaticon.com/128/3399/3399723.png',
        githubLink: 'https://github.com/your-username/project3',
        liveDemoLink: 'https://your-project3-demo.com',
        price: '$4499',
        review: '5.0 (544 reviews)',
    },
    {
        id: 4,
        label: 'Project 4',
        title: 'Real Estate Listing Website',
        description: 'A real estate listing website built with the MERN stack for showcasing available properties.',
        image: 'https://cdn-icons-png.flaticon.com/128/1176/1176853.png',
        githubLink: 'https://github.com/your-username/project4',
        liveDemoLink: 'https://your-project4-demo.com',
        price: '$499',
        review: '5.0 (25 reviews)',
    },
    {
        id: 5,
        label: 'Project 5',
        title: 'Blog and News Portal',
        description: 'A blog and news portal developed with the MERN stack for publishing articles and news updates.',
        image: 'https://cdn-icons-png.flaticon.com/128/2867/2867222.png',
        githubLink: 'https://github.com/your-username/project5',
        liveDemoLink: 'https://your-project5-demo.com',
        price: '$499',
        review: '5.0 (25 reviews)',
    },
];

const Projects1 = () => {
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
        autoplaySpeed: 4000,
        slidesToScroll: 2,
        centerMode: true,
        variableWidth: variableWidth,
    };

    return (
        <div className="my-6 p-2 ">
            <div className="lg:w-2/4 lg:mx-10 p-2 text-left">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    Over time, we've delivered an array of captivating designs for our clients.
                </h1>
                <p className="text-gray-500">
                    "Turning our client's visions into reality is our passion. Our extensive experience in design has enabled us to bring countless projects to life, each one telling a unique story through exceptional design."
                </p>
            </div>

            <Slider {...settings}>
                {items.map((item) => (
                    <div key={item.id} className="mx-auto">
                        <div className="p-4 bg-white rounded-lg shadow-lg md:flex items-center border space-x-2">
                            <div className="w-full md:w-1/2 md:flex-shrink-0">
                                <img src={item.image} alt={item.label} className=" " />
                            </div>
                            <div className="w-full md:w-1/2 pl-4 mt-4 md:mt-0">
                                <div className="text-xl font-bold text-green-600">{item.title}</div>
                                <p className="text-sm text-gray-500 mt-2">{item.description}</p>
                                <div className="text-sm text-gray-700 mt-2">
                                    <span className="font-bold">{item.price}</span> | {item.review}
                                </div>
                                <div className="mt-4">
                                    <a
                                        href={item.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-700 text-white px-2 py-1 rounded-md mr-2 hover:bg-green-600 transition duration-300"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href={item.liveDemoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-700 text-white px-2 py-1 rounded-md hover:bg-green-600 transition duration-300"
                                    >
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </Slider>
        </div>
    );
};

export default Projects1;
