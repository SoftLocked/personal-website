import { Typography } from "@mui/material";
import React from "react";
import ProjectCard from "./projectCard";

const Projects = () => {
    const projects = [
        {
            title: "Fukuzawa Labs: CHSH Game Simulator",
            year: 2025,
            description: "Contributed the singleplayer CHSH simulator allowing 100 students in UCI's quantum computing course to experimentally discover a CHSH strategy that breaks the bell inequality.",
            link: "https://devpost.com/software/overboard-o09dem?_gl=1*19xl9l8*_gcl_au*MjA5OTgwNDAxNS4xNzQ0NDA2OTUw*_ga*ODYxOTM0MjU0LjE3NDQ0MDY5NTA.*_ga_0YHJK3Y10M*MTc0NDgyNDM3OS4xMi4xLjE3NDQ4MjUzNDQuMC4wLjA.",
            skills: ["Next.js", "Vercel", "Supabase"]
        },
        {
            title: "Overboard",
            year: 2025,
            description: "🥇2025 UCI Datathon First Place! ($600 team earnings)\nShipwreck data collection and analysis to determine the existence of a shipwreck with high accuracy based on a coordinate input.",
            link: "https://devpost.com/software/overboard-o09dem?_gl=1*19xl9l8*_gcl_au*MjA5OTgwNDAxNS4xNzQ0NDA2OTUw*_ga*ODYxOTM0MjU0LjE3NDQ0MDY5NTA.*_ga_0YHJK3Y10M*MTc0NDgyNDM3OS4xMi4xLjE3NDQ4MjUzNDQuMC4wLjA.",
            skills: ["R", "Numpy", "Pandas", "Geopandas", "Plotly"]
        },
        {
            title: "QuPyt",
            year: 2025,
            description: "Python package to emulate and visualize quantum computations with a classical computer.",
            link: "https://pypi.org/project/qupyt/",
            skills: ["Python", "Numpy", "Matplotlib"]
        },
        {
            title: "Hottake Ranked",
            year: 2025,
            description: "Web application to make custom hot takes and allow users to rank them against each other. Accumulated 500 users.",
            link: "https://hottake-ranked.harivardhineedi.com/",
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
            <div className="flex flex-col justify-center text-center">
                <Typography sx={{ typography: { md: 'h1', sm: 'h2', xs: 'h3' } }} style={{fontWeight: 700}}>Projects</Typography>
                <Typography sx={{ typography: { md: 'h3', sm: 'h4', xs: 'h5' } }} style={{fontWeight: 600}}>A bit of what I&apos;ve been up to lately</Typography>
            </div>
            <div className="flex justify-center mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[75vw]">
                    {projects.map((project, index) => (
                        <a key={index} href={project.link} target="_blank" className="col_span-1 rounded-2xl transition duration-100 ease-in-out hover:bg-blue-100">
                            <ProjectCard title={project.title} year={project.year} description={project.description} skills={project.skills}/>
                        </a>
                    ))}
                </div>
            </div>
            <div className="custom-shape-divider-bottom-1743409567">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                        className="shape-fill"
                    ></path>
                </svg>
            </div>
            
        </React.Fragment>
    );
}
 
export default Projects;