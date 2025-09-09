"use client";

import { CursorGradient } from "../../components/CursorGradient";
import Header from "../../components/Header";
import Contact from "./Contact";
import Experience from "./Experience";
import Introduction from "./Introduction";
import Project from "./Projects";
import Skills from "./Skills";

const Mainpage: React.FC = () => {
  const skills=["Git", "Java","Python","HTML & CSS","Tailwind CSS","JavaScript","TypeScript","React.js","React Router","Redux","Context API","Next.js","Node.js","Express.js","RESTful APIs","MongoDB","SQL","AWS","Data Structure & Algorithms"];
    
  return (
    <CursorGradient
      className="min-h-screen w-full bg-[#FFDCDC]"
      gradientSize={600}
      gradientOpacity={0.3}
      gradientColor="29, 78, 216"
    >
      <div className="hidden">
        <Header/>
      </div>
      <div className="">
        <Introduction />
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <Project />
      </div>
      <div><Skills skills={skills}/></div>
      <div>
        <Contact/>
      </div>
    </CursorGradient>
  );
};

export default Mainpage;
