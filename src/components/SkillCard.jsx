import SkillSection from "./SkillSection";

const SkillCard = ({category, skillCategories}) => {
    return ( 
        <div className="relative bg-dark-2 shadow-lg p-5 rounded-lg flex-1">
            <h2 className="absolute inset-x-0 top-5 h-[3rem] text-white flex justify-center items-center text-xl font-bold mb-2 bg-secondary-2">

                {category}
            </h2>
            <div className="mt-10 pt-5">
                {skillCategories.map((skillCategory) => (
                    <div key={skillCategory.category}>
                        <h3 className="text-white font-bold  bg-secondary-3 inline-block p-2 rounded-md mt-5">{skillCategory.category}</h3>
                        <SkillSection skillSet={skillCategory.skillSet}/>
                     </div>
                ))}

            </div>
        </div>
     );
}
 
export default SkillCard;