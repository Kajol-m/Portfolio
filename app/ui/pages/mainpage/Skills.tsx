import { div } from "three/tsl";
import Button from "../../components/Button";

interface SkillsProp {
  skills: string[];
}
export default function Skills({ skills }: SkillsProp) {
  return (
    <div className="lg:m-4 m-4">
      <div className="sm:m-8 m-3 text-gray-600 sm:text-5xl text-3xl font-extrabold font-mono tracking-tighter">
        <h1>Skills</h1>
      </div>
      <div
        className="
    lg:m-8
    border-1 lg:border-2 border-gray-600
    lg:border-transparent
    lg:hover:border-gray-600
    sm:p-8 p-4
    lg:rounded-xl
  "
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
