"use client";

import { CursorGradient } from "../../components/CursorGradient";
import Experience from "./Experience";
import Introduction from "./Introduction";
import Project from "./Projects";

const Mainpage: React.FC = () => {

  return (
    <CursorGradient
      className="min-h-screen w-full bg-[#FFDCDC]"
      gradientSize={600}
      gradientOpacity={0.3}
      gradientColor="29, 78, 216"
    >
        <div>

<div className="relative z-0 ">

        <Introduction />
      </div>
      {/* <div className="absolute z-20">
        <img
          src="/assets/introductionBg.gig"
          alt="Foreground animation"
          className="w-48 h-48"
        />
      </div> */}
        </div>
        
      {/* <div className="">
        <Introduction/>
      </div> */}
      <div>
        <Experience/>
      </div>
      <div>
        <Project/>
      </div>
    </CursorGradient>
  );
};

export default Mainpage;
