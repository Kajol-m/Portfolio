import { HiOutlineExternalLink } from "react-icons/hi";
import Button from "../../components/Button";

interface ProjectCardProps {
  projectName: string;
  projectLink:string;
  projectImage:string;
  projectType?: string;
  projectDescription: string;
  mobileProjectDescription:string;
  skills: string[];
}
export default function ProjectCard({
  projectName,
  projectLink,
  projectImage,
  projectType,
  projectDescription,
  mobileProjectDescription,
  skills,
}: ProjectCardProps) {
  return (
    <div className="lg:p-8 md:p-8 p-4 lg:m-8 m-2 flex md:flex-row flex-col gap-5 border-1 lg:border-2 border-gray-600 lg:border-transparent hover:lg:border-gray-600 lg:rounded-xl text-gray-600 group">
      <div className="md:w-1/6">
        <img src={projectImage} alt={projectName} className=" mt-2 border-2 border-gray-500"/>
      </div>
      <div className="md:w-5/6">
      <div className="pb-3">
        <a href={projectLink} target="_blank" className=" group-hover:text-gray-700 flex flex-row gap-3">
          <h1 className="company-name font-bold text-2xl tracking-tighter">
          {projectName}
        </h1>
        <span className="pt-1 text-2xl  md:group-hover:scale-150 group-hover:scale-120 transition-transform duration-200"><HiOutlineExternalLink /></span>
                
        </a>
        
        <p className="text-sm">{projectType}</p>
      </div>
      <p className="pb-5 hidden md:block text-justify">{projectDescription}</p>
      <p className="pb-5 text-justify block md:hidden">{mobileProjectDescription}</p>
      <div className="hidden md:block">
        {skills.map((skill, index) => (
          <Button variant="skills-light" key={index} onClick={() => {}}  className="mr-3 mt-2">
            {skill}
          </Button>
        ))}
      </div>
      </div>
    </div>
  );
}
