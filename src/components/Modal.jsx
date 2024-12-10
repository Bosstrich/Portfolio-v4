import React, { useEffect, useState } from 'react';
import ContactForm from './ContactForm';
import { IoClose } from "react-icons/io5";


const Modal = ({ handleClose, showModal }) => {


  const [shouldRender, setShouldRender] = useState(showModal);
  return (
    <>  
        <div className={`${!showModal?  'opacity-0' : 'opacity-100 fixed inset-0 bg-black bg-opacity-50 z-40 transition-all duration-500'} `} onClick={handleClose}>
            <div className={`fixed inset-0 flex justify-center items-center z-50   ${!showModal?  'opacity-50  translate-y-[-100%]' :  'translate-y-0 opacity-100 '} transition-all  ease-out duration-500 `}>
                    <div className='max-w-[40rem] w-full p-6 rounded-lg top-[100%]'  onClick={(e) => e.stopPropagation()}>
                        <h2 className='font-bold text-2xl mb-2 text-white text-center'>Let's <span className='text-primary'>Talk:</span></h2>
                        <button onClick={handleClose} className="fixed top-4 right-4 text-white text-4xl font-bold" >
                            <IoClose/>
                        </button>
                        <ContactForm />
                    </div>
            </div>
        </div>



    </>
  );
};

export default Modal;
