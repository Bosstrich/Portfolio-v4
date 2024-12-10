import Slider from "../components/Slider";
import { projects } from "../data";


const Projects = () => {
    return ( 
        <section id="project" className="mt-10 pb-10 font-montserrat relative">
            <h1 className="text-white text-center text-3xl font-bold py-2 bg-secondary-2 w-full">
                My Best Projects
            </h1>
            <div className="padding-x py-5 overflow-hidden ">
                <h3 className="text-white text-2xl py-3">Software</h3>
                <Slider categories={projects.software}/>

                <h3 className="text-white text-2xl py-3">Hardware</h3>
                <Slider categories={projects.hardware}/>
            </div>
            <div class="shape-divider">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" class="shape-fill"></path>
                </svg>
            </div>  

        </section>
     );
}
 
export default Projects;