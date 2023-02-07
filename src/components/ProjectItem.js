import React from "react";

function ProjectItem({ name, about, technologies }) {
  const techArr = technologies.map((technology, index) => {
    return <span key={index}> {technology}</span>;
  });
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{techArr} </div>
    </div>
  );
}

export default ProjectItem;
