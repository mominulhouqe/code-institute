import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';


const Footer = () => {
  const email = 'mominulhauqe14@gmail.com';
  const phone = '+8801937985805';

  return (
    <footer className="bg-gray-900 text-white p-4">
      <div className="container px-4 mx-auto flex flex-col items-center">
        <div className="flex space-x-4 mb-8">
          <Fade direction="up" triggerOnce>
            <a
              href="https://github.com/mominulhouqe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-400"
            >
              <FaGithub />
            </a>
          </Fade>
          <Fade direction="up" triggerOnce delay={200}>
            <a
              href="https://www.linkedin.com/in/mominul-hoque-290340217/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-400"
            >
              <FaLinkedin />
            </a>
          </Fade>
          <Fade direction="up" triggerOnce delay={400}>
            <a
              href=" "
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-400"
            >
              <FaTwitter />
            </a>
          </Fade>
        </div>
        <Fade direction="up" triggerOnce delay={600}>
          <p className="text-gray-400 mb-4">Connect with me on social media:</p>
        </Fade>
        <Fade direction="up" triggerOnce delay={800}>
          <p className="text-gray-400 mb-4">Email: {email}</p>
        </Fade>
        <Fade direction="up" triggerOnce delay={1000}>
          <p className="text-gray-400 mb-4">Phone: {phone}</p>
        </Fade>
        <Fade direction="up" triggerOnce delay={1200}>
          <p className="text-gray-400">
            I am a passionate web developer dedicated to creating elegant and functional websites that deliver an exceptional user experience. With expertise in HTML, CSS, JavaScript, and React, I can bring your ideas to life and help you establish a strong online presence.
          </p>
        </Fade>
        <Fade direction="up" triggerOnce delay={1400}>
          <p className="text-gray-400">
            Let's collaborate and build something amazing together!
          </p>
        </Fade>
        <Fade direction="up" triggerOnce delay={1600}>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4">
            Contact Me
          </button>
        </Fade>
        <Fade direction="up" triggerOnce delay={1800}>
          <p className="text-gray-400 mt-4">
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </Fade>
      </div>
    </footer>
  );
};

export default Footer;