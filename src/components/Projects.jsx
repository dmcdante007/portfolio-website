import React from "react";
import ProjectItem from "./ProjectItem";
import expImg from "../assets/Expense-tracker.jpg";
import foodImg from "../assets/Real-food.jpg";
import sizmuImg from "../assets/sizmu.jpg";
import admin from "../assets/admin-dash.JPG"

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
          gitLink="https://github.com/dmcdante007/Expense-tracker-React-"
        ></ProjectItem>
        <ProjectItem
          img={foodImg}
          title="Resturant App"
          language="React JS"
          gitLink="https://github.com/dmcdante007/Food-order-App"
        ></ProjectItem>
        <ProjectItem
          img={sizmuImg}
          title="Music App"
          language="HTML CSS JS"
          gitLink="https://github.com/dmcdante007/Sicmu--Responsive-music-website"
        ></ProjectItem>
        <ProjectItem
          img={admin}
          title="Admin-Dashboard"
          language="HTML CSS JS ReactJS MUI Formik FullCalendar Data Grid"
          gitLink="https://github.com/dmcdante007/AdminDashboard"
        ></ProjectItem>
      </div>
    </div>
  );
};

export default Projects;
