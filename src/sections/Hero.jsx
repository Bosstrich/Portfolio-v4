import Button from "../components/Button";
import heroBG from '../assets/images/background.png'
import ParticlesBackground from "../components/ParticlesBackground";
import '../App.css'



const Hero = () => {
    return ( 
    <section id="resume" className="padding-x h-screen w-full relative flex items-end sm:items-center ">
        
            <ParticlesBackground/>
            <div className="relative bottom-0 sm:top-0 z-10 w-full text-center sm:text-left lg:max-w-[50rem] sm:max-w-[35rem] font-montserrat">
                <div className="w-full pt-10">
                    <p className="text-primary text-lg sm:text-xl my-2">Hello, I am</p>
                    <h2 className="font-bold text-white text-3xl sm:text-3xl lg:text-5xl">Engr. Patrick Beal</h2>
                    <p className="text-primary text-lg sm:text-2xl md:text-3xl my-2 md:my-5 font-semibold"> Computer Engineer</p>
                    <p className="text-white text-lg sm:text-xl md:text-2xl text-justify md:leading-8">
                        I specialize in both software and hardware applications, from Embedded Systems & Digital Circuits to
                        UI/UX & Front-End Web Development.
                    </p>
                </div>
                <Button className="max-sm:w-full mt-5 md:mt-7" variant="primary" text={'View Resume'}/>
            </div>
            <div className="absolute max-sm:left-0 max-sm:right-0 sm:top-0 sm:right-10   sm:bottom-0  top-10 z-2 pt-10 flex justify-center items-center">
                <img className="w-[320px] sm:w-[35rem] object-contain" src={heroBG} alt="" />
            </div>

        </section>
     );
}
 
export default Hero;