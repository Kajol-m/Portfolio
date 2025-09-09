import { IoMail } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaSpotify, FaInstagram } from "react-icons/fa6";

import Button from "../../components/Button";

export default function Contact() {
  return (
    <div className="relative flex flex-col gap-6 items-center justify-center md:h-[100vh] h-[75vh]">
      <div className="flex flex-col gap-2">
        <h1 className="text-gray-600 text-3xl sm:text-5xl font-extrabold tracking-tighter text-center">
          Get In Touch
        </h1>
        <p className="text-gray-500 text-center md:hidden">
          I am currently seeking new opportunities, please feel free to reach
          out.
        </p>
        <p className="px-[20%] text-gray-500 text-center hidden md:block">
          I am currently seeking new opportunities. If you found my portfolio
          interesting, have any questions, or would simply like to connect,
          please feel free to reach out. I will respond at the earliest possible
          time.
        </p>
      </div>

      <Button variant="skills-light-2" onClick={() => {}}>
        <a href="mailto:kajolmurmu29@gmail.com">Say Hello</a>
      </Button>
      <a
        href="mailto:kajolmurmu29@gmail.com"
        className="flex flex-row text-gray-500 gap-2 hover:underline underline-offset-7 decoration-[1.5px] mb-[150px]"
      >
        <IoMail className="text-2xl" />
        <p>kajolmurmu29@gmail.com</p>
      </a>
      <div className="absolute bottom-4  flex flex-col gap-2 items-center">
        <div className="social-links flex flex-row gap-4 text-3xl text-gray-600 pb-4">
          <a href="https://github.com/Kajol-m">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/kajol-murmu-0bb040250/">
            <FaLinkedin />
          </a>
          <a href="https://open.spotify.com/user/31b4oo5vtmspmz6bqxsraoqrflhq?si=f151544974d940f8">
            <FaSpotify />
          </a>
          <a href="https://www.instagram.com/jimmie.eats/?igsh=MTV6bWt2NzI0a2s2aA%3D%3D#">
            <FaInstagram />
          </a>
        </div>
        <div className="text-xs text-gray-500 text-center">
          The portfolio&apos;s UI was inspired by
          <a href="https://brittanychiang.com/">Brittany Chiang&apos;s</a>
          <span> and </span>
          <a href="https://itssharl.ee/">Charles Bruyerre&apos;s</a>
          <span> prorfolio.</span>
        </div>
        <p className="text-xs text-gray-600">
          © 2025 Kajol Murmu All rights reserved.
        </p>
      </div>
    </div>
  );
}
