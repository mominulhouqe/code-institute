import React from 'react';

const Services = () => {
    const services = [
        {
            id: 1,
            category: 'Web Design',
            title: 'Creative Web Design Solutions',
            description: 'Customized web design to make your online presence stand out.',
            image: 'https://cdn-icons-png.flaticon.com/128/633/633605.png',
        },
        {
            id: 2,
            category: 'Web Development',
            title: 'Web Development Expertise',
            description: 'Building responsive and interactive websites with the latest technologies.',
            image: 'https://cdn-icons-png.flaticon.com/128/3399/3399723.png',
        },
        {
            id: 3,
            category: 'Digital Marketing',
            title: 'Strategic Digital Marketing',
            description: 'Effective online marketing strategies to boost your brand and visibility.',
            image: 'https://cdn-icons-png.flaticon.com/128/927/927735.png',
        },
        {
            id: 4,
            category: 'Graphic Design',
            title: 'Creative Graphic Design Services',
            description: 'Eye-catching visuals that leave a lasting impression.',
            image: 'https://cdn-icons-png.flaticon.com/128/633/633619.png',
        },
        {
            id: 5,
            category: 'SEO Optimization',
            title: 'SEO Optimization and Ranking',
            description: "Boost your website's visibility and search engine rankings.",
            image: 'https://cdn-icons-png.flaticon.com/128/889/889034.png',
        },
        // Add more services here
        {
            id: 6,
            category: 'Mobile App Development',
            title: 'Creating Innovative Mobile Apps',
            description: 'Crafting mobile apps that deliver exceptional user experiences.',
            image: 'https://cdn-icons-png.flaticon.com/128/888/888718.png',
        },
        {
            id: 7,
            category: 'E-commerce Solutions',
            title: 'E-commerce Store Development',
            description: 'Building and enhancing online stores for a global audience.',
            image: 'https://cdn-icons-png.flaticon.com/128/1592/1592140.png',
        },
        {
            id: 8,
            category: 'Content Writing',
            title: 'Professional Content Creation',
            description: 'Creating engaging content that resonates with your audience.',
            image: 'https://cdn-icons-png.flaticon.com/128/2393/2393622.png',
        },
    ];

    return (
        <div className="bg-gray-100 py-10">
        <div className="container mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {services.map((service) => (
                    <div key={service.id} className="rounded-lg shadow-sm transform hover:scale-105 transition-transform duration-300 ease-in-out flex">
                        <div className="p-2">
                            <img src={service.image} alt={service.category} className="rounded-full" />
                        </div>
                        <div className="p-4">
                            <div className="text-xl font-bold text-blue-600 mb-2">{service.category}</div>
                            {/* <div className="text-lg font-semibold text-gray-800">{service.title}</div> */}
                            <p className="text-sm text-gray-500 mt-2">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
};

export default Services;
