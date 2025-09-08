import Button from "../../components/Button";

interface ProjectCardProps {
  projectName: string;
  projectType?: string;
  projectDescription: string;
  skills: string[];
}
export default function ProjectCard({
  projectName,
  projectType,
  projectDescription,
  skills,
}: ProjectCardProps) {
  return (
    <div className="p-8 m-8 border border-transparent hover:bg-yellow-100/25 hover:border-[#8E7DBE] rounded-xl text-gray-600">
      <div className="pb-3">
        <h1 className="company-name font-bold text-2xl tracking-tighter">
          {projectName}
        </h1>
        <p>{projectType}</p>
      </div>
      <p className="text-sm pb-5">{projectDescription}</p>
      <div className="flex flex-row gap-3">
        {skills.map((skill, index) => (
          <Button variant="skills-light" key={index} onClick={() => {}}>
            {skill}
          </Button>
        ))}
      </div>
    </div>
  );
}
