import SkillCard from "../components/SkillCard";
import { skills } from "../data";

const Skills = () => {
    return ( 
        <section className="padding-x pt-10">
            <h1 className="text-white font-bold text-3xl text-center">My Skills</h1>
            <div className="flex flex-col lg:flex-row gap-10 mt-5">

                <SkillCard category='Software' skillCategories={skills.software}/>
                <SkillCard category='Hardware' skillCategories={skills.hardware}/>

            </div>
        </section>
     );
}
 
export default Skills;
