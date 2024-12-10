import aboutIMG from '../assets/images/about-img.jpg';
import { FaFacebook, FaDribbble, FaLinkedin, FaGithub } from "react-icons/fa";



const About = () => {
    return (  
        <section id='about' className="flex flex-col lg:flex-row padding-x my-10 bg-dark-2 gap-5 font-montserrat">
            <div className="pt-5 flex justify-center items-center">
                <img className='w-[15rem] md:w-[20rem] rounded-lg w h-auto object-contain' src={aboutIMG} alt="" />
            </div>
            <div className='lg:mt-4 flex-1 md:ml-5'>
                <h2 className='font-bold text-center text-white text-2xl  my-5'>About Me</h2>
                <p className='about-p'> 
                    <span className='ml-10'>I </span>graduated in University of Science and Technology of Southern Philippines (USTP), and ever
                    since, I have 3 years of   experience in developing embedded systems, and at least 1 year of experience
                    in software applications such as Mobile Development, UI/UX, and Web Development.
                </p>
                <br />
                <p className='about-p'>
                    <span className='ml-10'>As </span>a Computer Engineer, I always loved making cool projects and delighted in seeing the reactions
                    of both the customers' and my teammates' reaction when finishing a project
                </p>
                <br />
                <p className='about-p'>
                    <span className='ml-10'>I </span> am a leader, and when placed in a position, I position myself lower than my
                    teammates, and think of them as my masters, and I am the servant
                </p>
                <br />
                <p className='about-p'>
                    <span className='ml-10'>I </span> am a funny person and love to bring light to the group, taking joy in finishing
                    projects in spirit and in truth.
                </p>
                <div className='flex justify-center gap-5 my-8'>
                    <a className='about-link' target='_blank' href="https://www.facebook.com/pcalagahan/"><FaFacebook size={30}/></a>
                    <a className='about-link' target='_blank'  href="https://www.linkedin.com/in/patrick-beal-calagahan/"><FaLinkedin size={30}/></a>
                    <a className='about-link' target='_blank' href="https://github.com/Bosstrich"><FaGithub size={30}/></a>
                    <a className='about-link' target='_blank' href="https://dribbble.com/Bosstrich"><FaDribbble size={30}/></a>
                </div>
            </div>
        </section>
    );
}
 
export default About;