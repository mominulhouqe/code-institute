
import React, { useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Zoom from 'react-awesome-reveal';
import logo from '../../assets/logo.jpg'
// import './Navber.css';
import { HashLink } from 'react-router-hash-link';
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleItemClick = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className='shadow-xl w-full fixed z-10 top-0 left-0 right-0'>
        <div className='md:flex items-center  justify-between bg-white py-4 md:px-10 px-7'>
          <Zoom direction='down' duration={500} triggerOnce>
            <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
              <Link to='/'>
                <img src={logo} className='h-16 w-16 rounded-full' alt="" />
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
                <HashLink
                  to='#'
                  className=' px-4 py-2 rounded-lg duration-500'
                  onClick={handleItemClick}
                >
                 HOME
                </HashLink>
              </li>
            </Zoom>
            <Zoom direction='down' duration={500} triggerOnce>
              <li className='md:ml-8 text-xl md:my-0 my-7'>
                <HashLink
                  to='#about'
                  className=' px-4 py-2 rounded-lg duration-500'
                  onClick={handleItemClick}
                >
                  ABOUT US
                </HashLink>
              </li>
            </Zoom>
            <Zoom direction='down' duration={500} triggerOnce>
              <li className='md:ml-8 text-xl md:my-0 my-7'>
                <HashLink to='#service' className=' px-4 py-2 rounded-lg duration-500'  onClick={handleItemClick}>
                  SERVICES
                </HashLink>
              </li>
            </Zoom>

            <Zoom direction='down' duration={500} triggerOnce>
              <li className='md:ml-8 text-xl md:my-0 my-7'>
                <HashLink to='#project' className=' px-4 py-2 rounded-lg duration-500'  onClick={handleItemClick}>
                  PROJECTS
                </HashLink>
              </li>
            </Zoom>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
