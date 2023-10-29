
import React, { useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Zoom from 'react-awesome-reveal';
import './Navber.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleItemClick = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className='shadow-xl z-10  w-full fixed top-0 left-0 '>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
          <Zoom direction='down' duration={500} triggerOnce>
            <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
              <Link to='/'>
                <img src="https://i.ibb.co/DVWZ7p7/download.png" className='h-16' alt="" />
              </Link>
            </div>
          </Zoom>

          <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            {open ? <IoClose /> : <IoMenu />}
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}
              }`}
          >
            <Zoom direction='down' duration={500} triggerOnce>
              <li className='md:ml-8 text-xl md:my-0 my-7'>
                <Link
                  to='/about'
                  className='text-[#005F00] hover:bg-[#005F00] hover:text-white px-4 py-2 rounded-lg duration-500'
                  onClick={handleItemClick}
                >
                  ABOUT US
                </Link>
              </li>
            </Zoom>
            <Zoom direction='down' duration={500} triggerOnce>
              <li className='md:ml-8 text-xl md:my-0 my-7'>
                <Link to='/services' className='text-[#005F00] hover:bg-[#005F00] hover:text-white px-4 py-2 rounded-lg duration-500'  onClick={handleItemClick}>
                  SERVICES
                </Link>
              </li>
            </Zoom>

            <Zoom direction='down' duration={500} triggerOnce>
              <li className='md:ml-8 text-xl md:my-0 my-7'>
                <Link to='/indurstry' className='text-[#005F00] hover:bg-[#005F00] hover:text-white px-4 py-2 rounded-lg duration-500'  onClick={handleItemClick}>
                  INDUSTRIES
                </Link>
              </li>
            </Zoom>
            <Zoom direction='down' duration={500} triggerOnce>
              <li className='md:ml-8 text-xl md:my-0 my-7'>
                <Link to='/contact' className='text-[#005F00] hover:bg-[#005F00] hover:text-white px-4 py-2 rounded-lg duration-500'  onClick={handleItemClick}>
                  CONTACT
                </Link>
              </li>
            </Zoom>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
