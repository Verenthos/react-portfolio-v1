import React, { Component } from 'react';
import classNames from "classnames";
import projects from "../projects/projectsData";
import "../styles/projectsMenu.css";

export default class ProjectsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProject: 1,
    };
  }

  handleProjectClick = (project) => {
    this.setState({
      activeProject: project,
    });
  };

  renderContent = (projects) => {
    return projects.map((project, index) => (
      <div key={index} className={`project-sub-container-${index + 1}`}>
        <h3>{project.title}</h3>
        {/* Conditionally render a video or an image */}
        {project.isVideo ? (
          <video
            src={project.media}
            controls
            style={{ width: "100%", height: "auto" }}
            loop
            muted
            autoPlay
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={project.media} alt={project.title} style={{ width: "100%", height: "auto" }} />
        )}
        <div>{project.description}</div>
        <div className="link-container">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GITHUB
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            DEMO
          </a>
        </div>
      </div>
    ));
  };

  render() {
    const { activeProject } = this.state;
    const projectItems = ["PROJETO 1", "PROJETO 2", "PROJETO 3"];
    
    return (
      <div className="project-menu">
        <div className="project-items-container">
          {projectItems.map((item, index) => (
            <div
              key={index}
              className={classNames("project-item", {
                activeProject: activeProject === index + 1,
              })}
              onClick={() => this.handleProjectClick(index + 1)}
            >
              <h2 className="title">{item}</h2>
            </div>
          ))}
        </div>
        <div className="project-sub-container">
          {this.renderContent([projects[activeProject]])}
        </div>
      </div>
    );
  }
}
