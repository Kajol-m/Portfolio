import ExperienceCards from "./ExperienceCard";

const Experience: React.FC = () => {
  return (
    <div className="sm:m-8 m-4">
      <h1 className="m-6 text-gray-600 sm:text-5xl text-3xl font-extrabold font-mono tracking-tighter">Experience</h1>
      <div>
        <ExperienceCards
        company={"Software Engineer Intern, EPAM Systems"}
        companyLink="https://www.epam.com/"
        companyDate="Jan 2025 — June 2025"
        location={"Hyderabad, India"}
        experienceDescription={"Developed registration, login, and user profile features for a web application using JavaScript (ES6+), TypeScript, React, Node.js, MongoDB, and RESTful APIs. Built and tested backend APIs and frontend UI components with Jest and React Testing Library(RTL), ensuring high code quality and reliability. Applied Agile Scrum methodologies for iterative development and team collaboration. Gained hands-on experience with AWS for deploying and managing cloud-based applications."}
        skills={["Git","HTML & CSS","JavaScript","TypeScript","React.js","Redux","Context API","Jest","Node.js","Express.js", "MongoDB","AWS"]}
        />
      </div>
    </div>
  );
};
export default Experience;
