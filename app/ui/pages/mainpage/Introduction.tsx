import TextType from "@/components/TextType";
import Button from "../../components/Button";
import { GrLinkBottom } from "react-icons/gr";
const Introduction: React.FC = () => {
  return (
    <>
      <div className=" relative z-10 flex flex-col px-2 justify-center items-center gap-2 h-[100vh]">
        <h1 className="text-gray-600 md:text-7xl sm:text-5xl text-3xl font-extrabold font-mono tracking-tighter text-center">
          Hi there, I&apos;m Kajol Murmu
        </h1>
        <div  className="flex flex-row text-gray-600 md:text-5xl sm:text-3xl text-2xl font-extrabold font-mono tracking-tighter">
          <TextType
            text={["Frontend", "Backend", "Full-stack", "Web","Software"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter=" "
            textColors={["#4B5563"]}
          />
          <p>Developer</p>
        </div>
        <div className="text-gray-600 md:text-xl text-md  text-center">
            <p>I like to build end-to-end, scalable full-stack applications with clean architecture, </p>
            <p>efficient backend systems, and delightful user experiences.</p>
        </div>
        <div>
          <Button variant="header-light" onClick={()=>{
                    const link=document.createElement('a');
                    link.href='/assets/Kajol-Murmu.pdf';
                    link.download="Kajol_Murmu.pdf"
                    document.body.append(link);
                    link.click();
                    document.body.removeChild(link);

                    window.open('/assets/Kajol_Murmu.pdf','_blank');
                }} className="flex flex-row gap-1 cursor-pointer ">
                    <p>Resume</p>
                    <span className="pt-1"><GrLinkBottom /></span>
                </Button>
        </div>
      </div>
    </>
  );
};
export default Introduction;
