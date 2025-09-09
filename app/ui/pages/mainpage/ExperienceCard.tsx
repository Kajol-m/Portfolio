import Button from "../../components/Button";
import { HiOutlineExternalLink } from "react-icons/hi";

interface ExrienceCardsProps{
    company:string;
    companyLink:string;
    companyDate:string;
    location:string;
    experienceDescription:string;
    skills:string[];

}
export default function ExperienceCards({company,companyLink,companyDate,location,experienceDescription,skills}:ExrienceCardsProps) {
  return (
    <div className="md:flex sm:p-8 p-4 sm:m-8 m-4 border border-[#8E7DBE] sm:border-transparent bg-yellow-100/25 sm:bg-transparent hover:sm:bg-yellow-100/25 hover:sm:border-[#8E7DBE] rounded-xl text-gray-600  group">
      <div className="md:w-1/6 pt-1">
        <p className="text-sm">{companyDate}</p>
      </div>
      <div className="md:w-5/6">
      <div className="pb-3">
        <a href={companyLink} target="_blank" className=" group-hover:text-gray-700 flex flex-row gap-3">
          <h1 className="company-name font-bold text-2xl tracking-tighter">{company}</h1>
          <span className="pt-1 text-2xl  md:group-hover:scale-150 group-hover:scale-120 transition-transform duration-200"><HiOutlineExternalLink /></span>
        </a>
        
        <p className="text-sm location">{location}</p>
      </div>
      <p className="pb-5 hidden sm:block">
        {experienceDescription}
      </p>
      <div className=" hidden sm:block">
        {skills.map((skill,index)=>(
            <Button variant="skills-light" key={index} onClick={()=>{}} className="mr-3 mt-2">{skill}</Button>
        ))}
      </div>
      </div>
    </div>
  );
}
