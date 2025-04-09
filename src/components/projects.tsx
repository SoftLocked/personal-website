import { Typography } from "@mui/material";
import React from "react";
import ProjectCard from "./projectCard";

const Projects = () => {
    const projects = [
        {
            title: "Quantumpy",
            year: 2025,
            description: "Python package to emulate and visualize quantum computations with a classical computer.",
            link: "https://github.com/SoftLocked/qupy",
            skills: ["Python", "Numpy", "Matplotlib"]
        },
        {
            title: "Hottake Ranked",
            year: 2025,
            description: "Web application to make custom hot takes and allow users to rank them against each other.",
            link: "https://github.com/SoftLocked/HottakeRanked",
            skills: ["Next.js", "Firebase", "Firestore"]
        },
        {
            title: "Portfolio Website",
            year: 2025,
            description: "The source code for this website.",
            link: "https://github.com/SoftLocked/personal-website",
            skills: ["Next.js", "Vercel"]
        },
        {
            title: "AI Tech Interviewer",
            year: 2025,
            description: "Technical interview platform with an LLM interviewer. Complete with feedback and improvement trends.",
            link: "https://github.com/SoftLocked/Frontend-Live-Technical-Interview-Platform",
            skills: ["Next.js", "Firebase", "OpenAI API"]
        },
        {
            title: "Custom Block Chain",
            year: 2025,
            description: "Distributed, peer-to-peer, secure, and decentralized block chain in Node.js.",
            link: "https://github.com/SoftLocked/nodejs-blockchain",
            skills: ["Node.js", "CryptoJS"]
        },
        {
            title: "Golang TCP Server",
            year: 2025,
            description: "Concurrent Transmission Control Protocol (TCP) Server in Golang.",
            link: "https://github.com/SoftLocked/go-tcp-server",
            skills: ["Golang (GO)"]
        },
        {
            title: "ICS 6B Exam Tool",
            year: 2024,
            description: "Tool for UCI's ICS 6B and 6D (Discrete Mathematics) that pre-allocates a seat to every student and pre-prints an individualized exam with their name on the paper.",
            link: "https://github.com/SoftLocked/ICS-6B-6D-Exam-Script",
            skills: ["Python", "LaTeX"]
        },
        {
            title: "ICSearch",
            year: 2024,
            description: "Search Engine to index and query UCI ICS-related web pages using TF-IDF and cosine similarity.",
            link: "https://github.com/SoftLocked/Search-Engine-Backend",
            skills: ["Next.js", "Python", "Flask API"]
        },
        {
            title: "CrumpleAPI",
            year: 2024,
            description: "Java Spring Boot API to interact over network with a Crumple Tree, a self-balancing binary search tree data structure.",
            link: "https://github.com/SoftLocked/CrumpleAPI",
            skills: ["Java", "Spring Boot"]
        },
        {
            title: "ECR Law Firm Website",
            year: 2022,
            description: "Static web page built for Cohen Rothschild, PLLC with Bulma CSS.",
            link: "https://github.com/SoftLocked/Cohen-Rothschilds",
            skills: ["HTML", "CSS", "SCSS", "Bulma"]
        },
        {
            title: "Niche Cloudware Website",
            year: 2022,
            description: "Static web page built for Niche Cloudware, LLC with Bulma CSS.",
            link: "https://github.com/SoftLocked/Niche-Cloudware-Website",
            skills: ["HTML", "CSS", "Bulma"]
        },
        {
            title: "Skill Surge Bot",
            year: 2021,
            description: "Student productivity bot built for a Discord server with over 1000 users. Implements the Pomodoro method and study focus mode.",
            link: "https://github.com/SoftLocked/Skill-Surge-Bot",
            skills: ["Node.js", "Discord API"]
        },
        {
            title: "Slope Field Generator",
            year: 2021,
            description: "Slope field generator with p5.js that can represent the slope field of any given ordinary differential equation (ODE).",
            link: "https://github.com/SoftLocked/Slope-Field-Generator",
            skills: ["JavaScript", "p5.js"]
        },
        {
            title: "Tenpy",
            year: 2020,
            description: "Toy python package to implement Linear algebraic structures and operations I made on the side while taking high school linear algebra.",
            link: "hhttps://github.com/SoftLocked/Tenpy",
            skills: ["Python"]
        }
    ];

    return ( 
        <React.Fragment>
            <div className="flex justify-center text-center">
                <Typography sx={{ typography: { md: 'h1', sm: 'h2', xs: 'h3' } }} style={{fontWeight: 700}}>Projects</Typography>
            </div>
            <div className="flex justify-center items-center flex-col">
                <div className="xs:columns-1 sm:columns-2 md:columns-3">
                    <div></div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[75vw]">
                    {projects.map((project, index) => (
                        <div className="col_span-1">
                            <ProjectCard title={project.title} year={project.year} description={project.description} link={project.link} skills={project.skills}/>
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