import Button from "./Button";
import '../Slider.css'


const ProjectSlide = ({projectIMG, title, techs, description, links}) => {

    return (
        <div className="w-full bg-dark-2 p-5 h-full grid grid-rows-[auto, 1fr, 1fr, 1fr]">
            <div className="flex justify-center">
                <img className="cursor-pointer w-[15rem] hover:scale-125 transition delay-100" src={projectIMG} alt={title} />
            </div>
            <p className="text-primary text-lg font-bold py-2">{title}</p>
            <div className="flex gap-2 py-2 flex-wrap">
                {techs.map((tech) => (

                    <div key={tech} className="text-white text-sm flex items-center bg-gray-600 py-1 px-2 rounded-sm">
                        {tech}
                    </div>
                ))}
            </div>
            <p className="py-3 text-white text-lg">
                {description}
            </p>
            <div className="relative left-0 bottom-0 flex gap-3 flex-wrap justify-center">
                <Button className="w-full sm:w-auto" text={'View Project'} variant="secondary" link={links[0]}/>
                <Button className="w-full sm:w-auto" text={'Repository'} variant="primary" link={links[1]}/>
            </div>
        </div>
    );
}
 
export default ProjectSlide;