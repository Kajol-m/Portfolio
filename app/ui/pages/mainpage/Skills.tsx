import { div } from "three/tsl";
import Button from "../../components/Button";

interface SkillsProp {
  skills: string[];
}
export default function Skills({ skills }: SkillsProp) {
  return (
    <div className="m-8">
      <div className="sm:m-8 mb-4  text-gray-600 sm:text-5xl text-3xl font-extrabold font-mono tracking-tighter">
        <h1>Skills</h1>
      </div>
      <div
        className="m-2 sm:m-8 
  border border-[#8E7DBE] sm:border-transparent 
  bg-yellow-100/25 sm:bg-transparent 
  hover:sm:border-[#8E7DBE] hover:sm:bg-yellow-100/25 
  sm:p-8 p-3 rounded-xl"
      >
        {skills.map((skill, index) => (
          <Button
            variant="skills-light-2"
            key={index}
            onClick={() => {}}
            className="sm:mr-3 mr-2 mt-4 "
          >
            {skill}
          </Button>
        ))}
      </div>
    </div>
  );
}
