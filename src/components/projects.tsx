import { Typography } from "@mui/material";
import React from "react";
import ProjectCard from "./projectCard";

const Projects = () => {
    const projects = [
        {
            title: "Quantumpy",
            year: 2025,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://github.com/SoftLocked/qupy"
        },
        {
            title: "Hottake Ranked",
            year: 2025,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://github.com/SoftLocked/HottakeRanked"
        },
        {
            title: "Portfolio Website",
            year: 2025,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://github.com/SoftLocked/personal-website"
        },
        {
            title: "AI Tech Interviewer",
            year: 2025,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://github.com/SoftLocked/Frontend-Live-Technical-Interview-Platform"
        },
        {
            title: "Custom Block Chain",
            year: 2025,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://github.com/SoftLocked/nodejs-blockchain"
        },
        {
            title: "Golang TCP Server",
            year: 2025,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://github.com/SoftLocked/go-tcp-server"
        },
        {
            title: "ICS 6B Exam Tool",
            year: 2024,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://github.com/SoftLocked/ICS-6B-6D-Exam-Script"
        },
        {
            title: "ICSearch",
            year: 2024,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://github.com/SoftLocked/Search-Engine-Backend"
        },
        {
            title: "CrumpleAPI",
            year: 2024,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://github.com/SoftLocked/CrumpleAPI"
        },
        {
            title: "ECR Law Firm Website",
            year: 2022,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://github.com/SoftLocked/Cohen-Rothschilds"
        },
        {
            title: "Niche Cloudware Website",
            year: 2022,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://github.com/SoftLocked/Cohen-Rothschilds"
        },
        {
            title: "Skill Surge Bot",
            year: 2021,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://github.com/SoftLocked/Skill-Surge-Bot"
        },
        {
            title: "Slope Field Generator",
            year: 2021,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://github.com/SoftLocked/Slope-Field-Generator"
        },
        {
            title: "Tenpy",
            year: 2020,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "hhttps://github.com/SoftLocked/Tenpy"
        }
    ];

    return ( 
        <React.Fragment>
            <div className="flex justify-center mb-10">
                <Typography variant="h1" style={{fontWeight: 700}}>Projects</Typography>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[75vw]">
                    {projects.map((project, index) => (
                        <div className="col_span-1">
                            <ProjectCard title={project.title} year={project.year} description={project.description} link={project.link}/>
                        </div>
                    ))}
                </div>
            </div>
            <div className="custom-shape-divider-bottom-1743408918">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" className="shape-fill"></path>
                </svg>
            </div>
        </React.Fragment>
    );
}
 
export default Projects;