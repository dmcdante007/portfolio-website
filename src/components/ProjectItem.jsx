import React from "react";

const ProjectItem = (props) => {
  return (
    <div className="relative flex item-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img src={props.img} className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-xl font-bold text-white tracking-wider text-center">
          {props.title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{props.language}</p>
        <a href={props.gitLink}>
          <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
            More Information
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
