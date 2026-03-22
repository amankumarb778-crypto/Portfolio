import React from 'react';
import './Projects.css';

const projectsData = [
    {
        id: 1,
        title: 'E-Commerce Dashboard',
        description: 'A comprehensive dashboard for managing online stores, featuring real-time analytics and inventory management.',
        tags: ['React', 'Chart.js', 'Node.js'],
        link: '#'
    },
    {
        id: 2,
        title: 'Social Media App',
        description: 'A modern social platform connecting developers, with features like code sharing and real-time messaging.',
        tags: ['React', 'Firebase', 'Tailwind'],
        link: '#'
    },
    {
        id: 3,
        title: 'Task Management Tool',
        description: 'Productivity application helping teams collaborate efficiently with boards, lists, and calendar views.',
        tags: ['Vue', 'Vuex', 'Express'],
        link: '#'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projectsData.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="card-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="tag">{tag}</span>
                                    ))}
                                </div>
                                <a href={project.link} className="project-link">View Project →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
