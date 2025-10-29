import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100); // appear after 100px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        flex flex-row justify-center gap-8
        font-bold text-gray-600
        lg:text-3xl md:text-2xl
        p-6 transition-all duration-500
        ${isScrolled ? "opacity-100 bg-[#FFDCDC] translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"}
      `}
    >
      <div
        onClick={() =>
          document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
        }
        className="cursor-pointer"
      >
        Experience
      </div>

      <div
        onClick={() =>
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
        }
        className="cursor-pointer"
      >
        Projects
      </div>

      <div
        onClick={() =>
          document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
        }
        className="cursor-pointer"
      >
        Skills
      </div>

      <div
        onClick={() =>
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
        }
        className="cursor-pointer"
      >
        Contact
      </div>
    </header>
  );
};

export default Header;
