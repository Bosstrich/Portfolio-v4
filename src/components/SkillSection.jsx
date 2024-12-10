const SkillSection = ({skillSet}) => {
    return ( 
        
        <div className="flex flex-wrap gap-3 mt-5">
            {skillSet.map((skill, index) => (
                <p key={index} className="text-white bg-gray-600 py-1 px-2 rounded-sm">{skill}</p>
            ))}
        </div>
     );
}
 
export default SkillSection;