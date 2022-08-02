import React from "react";
import Project from "../Project";
import Images from "../../assets/images/projects";

const projects = [{
    title: "Employee Tracker",
    image: Images.employeeTrackerScreenshot,
    alt: "screenshot of application ",
    repository: "https://github.com/carissamero/Employee-Tracker.git",
    deployed: "https://carissamero.github.io/Employee-Tracker/",
}, ];

function Portfolio() {
    return ( <
        section >
        <
        h2 > Portfolio < /h2> <
        div className = "work-container" > {
            projects.map((project) => ( <
                Project title = { project.title }
                image = { project.image }
                alt = { project.alt }
                repository = { project.repository }
                deployed = { project.deployed }
                />
            ))
        } <
        /div> <
        /section>
    );
}

export default Portfolio;