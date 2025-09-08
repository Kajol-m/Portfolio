import TextType from "@/components/TextType";
const Introduction: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2 h-screen ">
        <h1 className="text-gray-600 text-7xl font-extrabold font-mono tracking-tighter">
          Hi there, I&apos;m Kajol Murmu
        </h1>
        <div  className="flex flex-row text-gray-600 text-5xl font-extrabold font-mono tracking-tighter">
          <TextType
            text={["Frontend", "Backend", "Full-stack"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter=" "
            textColors={["#4B5563"]}
          />
          <p>Developer</p>
        </div>
        <div className="text-gray-600 text-xl text-center">
            <p>I like to build end-to-end, scalable full-stack applications with clean architecture, </p>
            <p>efficient backend systems, and delightful user experiences.</p>
        </div>
      </div>
    </>
  );
};
export default Introduction;
