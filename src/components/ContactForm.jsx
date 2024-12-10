import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Toast from './Toast';

const ContactForm = () => {

    const form = useRef();

    const initialValues = {user_name: '', user_email: '', message: ''};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const [showToast, setShowToast] = useState(false);

    const handleToast = () => {
        setShowToast(!showToast);
    }
  
    const handleChange = (e) => {
  
      const {name , value} = e.target;
      setFormValues({...formValues, [name]: value});
  
    }
  
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      console.log('submit!')
      setFormErrors(validate(formValues));
  
  
  
  
      setIsSubmit(true);
  
    };
  
    useEffect(() => {
  
      console.log(formErrors )
      if(Object.keys(formErrors).length === 0 && isSubmit){
  
        emailjs
        .sendForm('service_kl550yn', 'template_t2e8y8p', form.current, {
          publicKey: 'sGjVpIx7H1sFrVRx5',
        })
        .then(
          () => {
            setToastMessage('Email sent successfully!'); // Set the success message
            setShowToast(true); // Show the toast
            setFormValues(initialValues); // Reset form fields
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
            console.log('FAILED...', error.text);
            setToastMessage('Failed to send email! Please try again.'); // Set error message
            setShowToast(true); // Show the toast on failure
          },
        );   
      }
  
    }, [formErrors]) 
  
    const validate = (values) => {
  
      const errors = {
  
  
      }
  
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
      if(!values.user_name) {
  
        errors.user_name  = 'Name is required!';
  
      }else if(values.user_name.length < 3){
  
        errors.user_name = "moboa's ngalan nimo oy tarunga na dina"
      }
  
      if(!values.user_email) {
  
        errors.user_email  = 'Email is required!';
  
      }else if(!regex.test(values.user_email)){
  
        errors.user_email = 'Invalid Email'
      }
      if(!values.message) {
  
        errors.text  = 'Message is required!';
  
      }else if(values.message.length < 4) {
  
        errors.text = 'Text is too short!'
      }
  
      return errors
    }

    return ( 
        <div>
          <form className='flex flex-col max-w-[40rem] mx-auto bg-dark-2 px-5 py-5 shadow-lg rounded-md' ref={form} onSubmit={sendEmail} >
            <div className='flex flex-col'>
              <label className='text-primary font-semibold'>Name</label>
              <input className='form-input' 
                     type="text" name="user_name" 
                     maxLength={45} 
                     value={formValues.username}
                     onChange={handleChange}/>
              <p className='text-red-400 mb-2'>{formErrors.user_name}</p>
            </div>
            <div className='flex flex-col'>
              <label className='text-primary font-semibold' >Email</label>
              <input className='form-input' 
                     type="email" 
                     name="user_email" 
                     value={formValues.email}
                     onChange={handleChange}/>
              <p className='text-red-400 mb-2'>{formErrors.user_email}</p>

            </div>
            <div className='flex flex-col mb-2'>
              <label className='text-primary font-semibold '>Message</label>
              <textarea className='form-input h-28 resize-none' 
                        name="message" 
                        value={formValues.message}
                        onChange={handleChange}/>
              <p className='text-red-400 '>{formErrors.text}</p>

            </div>
            <input className='btn btn-secondary font-montserrat cursor-pointer my-3' type="submit" value="Send" />
          </form>
          <Toast message={'Message Sent Successfully!'} showToast={showToast} onClose={handleToast} />

        </div>
     );
}
 
export default ContactForm;