import React from "react";
import ProjectItem from "./ProjectItem";
import expImg from "../assets/Expense-tracker.jpg";
import foodImg from "../assets/Real-food.jpg";
import sizmuImg from "../assets/sizmu.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b52]">
        Projects
      </h1>
      <p className="text-center py-8">
        Explore my React.js projects – a showcase of dynamic web experiences
        crafted with precision and creativity.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={expImg}
          title="Expense App"
          language="React JS"
        ></ProjectItem>
        <ProjectItem
          img={foodImg}
          title="Resturant App"
          language="React JS"
        ></ProjectItem>
        <ProjectItem
          img={sizmuImg}
          title="Music App"
          language="HTML CSS JS"
        ></ProjectItem>
      </div>
    </div>
  );
};

export default Projects;
