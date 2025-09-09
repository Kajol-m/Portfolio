import Button from "./Button";
import { GrLinkBottom } from "react-icons/gr";

export default function Header(){
    return(
        <div className="w-full bg-transparent flex justify-center items-center sm:p-8 pt-4 px-2">
            <div className="flex sm:gap-8 gap-4 items-center ">
                <Button variant="header-light" onClick={()=>{
                    const link=document.createElement('a');
                    link.href='/assets/Kajol_Murmu.pdf';
                    link.download="Kajol_Murmu.pdf"
                    document.body.append(link);
                    link.click();
                    document.body.removeChild(link);

                    window.open('/assets/Kajol_Murmu.pdf','_blank');
                }} className="flex flex-row gap-1 cursor-pointer ">
                    <p>Resume</p>
                    <span className="pt-1"><GrLinkBottom /></span>
                </Button>
                <Button variant="header-light" onClick={()=>{}} className="hidden">
                    About
                </Button>
            </div>
            <button className="sm:w-[100px] w-[70px] absolute right-2 sm:pr-2 fixed hidden">
                <img src="/assets/darkMode-gray.png" alt="darkMode" />
            </button>
        </div>
    )
}