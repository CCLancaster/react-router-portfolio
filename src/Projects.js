import React from 'react';

function Projects(props) {
    return (
        <div>
            <div>
                <h1>Projects</h1>
            </div>
            <div class="projects">
            <div>
                {props.projects.map((project, i) => (
                    <div key={`project-${i}`}>
                        <h3><a href={project.link}>{project.title}</a></h3>
                        <p>{project.description}</p>
                        <img src={project.img}></img>
                    </div>
                ))}
            </div>
            </div>
        </div>
    )
}

export default Projects;