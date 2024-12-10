import ContactForm from "../components/ContactForm";


export const Contact = () => {
 

  return (
    <section id='contact' className='bg-dark-3' >

      <div className='padding-x max-sm:px-0 pt-10 pb-10 font-montserrat'>
        <h2 className='text-white text-3xl text-center font-bold py-3'>
          Let's <span className='text-primary'>Talk</span>
        </h2>
        <ContactForm/>

      </div>
      <footer className='bg-dark-1 py-5'>
        <p className='text-white font-bold text-center tex-2xl'>.2024 Portfolio v4 | Patrick Beal </p>
      </footer>
    </section>
  );
};
export default Contact;