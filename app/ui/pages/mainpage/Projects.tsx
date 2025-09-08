import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <div className="m-8">
      <h1 className="m-8 text-gray-600 text-5xl font-extrabold font-mono tracking-tighter">
        Projects
      </h1>
      <div>
        <ProjectCard
          projectName="Underwater Image Enhancement Using Lightweight CNN"
          projectType="Final Year Project"
          projectDescription=" Developed a novel lightweight CNN architecture with only five convolutional layers to enhance underwater
 images, improving visibility with minimal computational cost. Implemented the solution in Python using TensorFlow and Keras, optimized for real-time performance on edge
 devices. Utilized Adam optimizer, scikit-learn, NumPy, and Matplotlib for training, evaluation, and visualization. Documented outcomes with quantifiable metrics (UCIQE, NIQE) and benchmarked performance against
 state-of-the-art approaches."
          skills={[
            "Python",
            "Tensorflow/Keras",
            "Google Colab",
            "Scikit image",
            "Matplotlib",
            "Numpy",
          ]}
        />
        <ProjectCard
          projectName="Podcast Summarizer"
          projectType="Web application to summarize podcast"
          projectDescription="Developed a full-stack web application to extract, transcribe, and summarize podcast episodes. Utilized AssemblyAI API for transcription and Google Gemini API for generating AI-powered summaries. Built a responsive frontend using React and TypeScript, and a scalable backend using Node.js, Express, and MongoDB. Deployed frontend to AWS S3 and AWS Cloudfront and backend to Render.com for cloud hosting."
          skills={[
            "Typescript",
            "React.js",
            "Express.js",
            "Tailwind CSS",
            "Gemini API",
            "Assembly API",
            "MongoDB",
            "AWS"
          ]}
          />
          <ProjectCard
          projectName="Portfolio Website"
          projectType="My portfolio"
          projectDescription="Built a full-stack web application using Next.js (React framework) with server-side rendering (SSR) and API routes for efficient data handling. Designed and implemented a MongoDB database to store and manage static data, integrating it with the frontend via custom REST API endpoints. Utilized Tailwind CSS for responsive, scalable UI components, ensuring a seamless user experience across devices."
          skills={[
            "Typescript",
            "Next.js",
            "Tailwind CSS",
            "MongoDB",
            "AWS"
          ]}
        />
      </div>
    </div>
  );
}
