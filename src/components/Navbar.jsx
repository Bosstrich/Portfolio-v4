import { useEffect, useState } from "react";
import { navLinks } from "../data";
import Button from "./Button";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Modal from "./Modal"; // Import the Modal component

import ContactForm from './ContactForm';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [showModal, setShowModal] = useState(false); // State for modal visibility



    const handleModal =() => {

        setShowModal(!showModal);
    }

    const handleNav = () => {

        setNav(!nav);
    }

    return ( 
            <>
                <nav className="padding-x flex justify-between items-center navbar text-primary bg-dark-1">
                    <h1 className='text-4xl font-imperial cursor-pointer'>Bosstrich</h1>
                    <ul className='hidden md:flex md:items-center'>
                        {navLinks.map((navLink) => (
                            <li key={navLink.label}  className="p-4 "><a className="text-lg hover-link font-Montserrat" href={navLink.href} >{navLink.label}</a></li>
                        ))}
                    </ul>
                    <div className="hidden md:flex">
                        <Button variant="secondary" text={'Hire Me'} onClick={(handleModal)}/>
                    </div>
                    <div onClick={handleNav} className="flex items-center md:hidden">
                        { nav ? <IoClose size={30} className="cursor-pointer"/> :  <FaBars className="cursor-pointer" size={20}/>}
                    </div>
                    <div className={`${!nav  ?
                                    `fixed left-[-100%] ` :
                                    `fixed top-0 left-0 bottom-0 bg-dark-2 w-[80%] max-sm:border-none border-r border-secondary text-left  ease-in-out duration-500` } md:left-[-100%]`  }>
                        <h1 className='text-4xl font-imperial cursor-pointer px-8 pt-5 mb-3'>Bosstrich</h1>
                        <ul className="uppercase">
                            {navLinks.map((navLink) => (
                                <li key={navLink.label} className="py-4  px-8  border-b border-secondary "><a className="text-lg font-Montserrat" href={navLink.href} >{navLink.label}</a></li>
                            ))}
                        </ul>
                        <Button className="w-full my-5" variant="secondary" text={'Hire Me'} onClick={(handleModal)}/>
                    </div>
                </nav>
                <Modal showModal={showModal} handleClose={handleModal} />
                {/* <div className={`${!showModal?  'opacity-0 ' : 'opacity-100 fixed inset-0 bg-black bg-opacity-50 z-40 transition-opcaity duration-500'} `} onClick={handleModal}>
                    <div className={`fixed inset-0 flex justify-center items-center z-50   ${showModal? 'translate-y-0 opacity-100 transition-all  ease-in-out duration-500' : 'opacity-0  translate-y-[-100%]'}  `}>
                            <div className='max-w-[40rem] w-full p-6 rounded-lg top-[100%]'  onClick={(e) => e.stopPropagation()}>
                                <h2 className='font-bold text-2xl mb-2 text-white text-center'>Let's <span className='text-primary'>Talk:</span></h2>
                                <button onClick={handleModal} className="fixed top-4 right-4 text-white text-4xl font-bold" >
                                    <IoClose/>
                                </button>
                                <ContactForm />
                            </div>
                    </div>
                </div> */}

            </>

     );
}
 
export default Navbar;