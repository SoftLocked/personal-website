import { Typography } from "@mui/material";
import React from "react";
import ExpCard from "./expCard";



const Research = () => {

    const experiences = [
        /*{
            company:"UC Irvine", title:"B.S. Computer Science", timeframe:"Sep 2022 - Present",
            description:`
                Specialized in Algorithms. Took courses in Systems, Architecture, Database, Information Retrieval, Machine Learning, Quantum Computing, Complexity, Data Structures, Algorithms, and many more.`
        },*/
        /*{
            company:"Pickaxe", title:"Software Engineer Intern", timeframe:"Jun 2023 - Aug 2023",
            description:`
            Engineered a generative AI-driven Twitter marketing automation tool within 6 weeks, streamlining company marketing.
            Integrated GPT-4, Twitter API, LangChain, and FastAPI, reducing tweeting time by 80% while maintaining engagement.
            Automated end-to-end testing with Python Unittest, ensuring robust, maintainable code with 99% test coverage.`
        },*/
        /*{
            company:"UC Irvine", title:"Teaching Assistant", timeframe:"Sep 2023 - Mar 2025",
            description:`
            Managed a 20-member teaching team using Agile Sprint Methodology, coordinating logistics for 600+ students per term.
            Automated exam logistics using Pandas, NumPy, and LaTeX, cutting logistic time by 50% and eliminating manual errors.
            Developed an ID-check system leveraging UCI Photo Roster API, Pandas, and LaTeX, reducing exam turn-in time by 80%.`
        },*/
        {
            company:"UC Irvine", title:"Research Assistant", timeframe:"Jan 2025 - Present",
            description:`
            Studying metacognition and the impact of active journaling on the problem-solving skills of computer science students learning a new concept in randomized algorithms.`
        }
    ];

    return (
        <React.Fragment>
            <div className="flex flex-col justify-center text-center pt-20 pb-10 lg:ml-11">
                <Typography sx={{ typography: { md: 'h1', sm: 'h2', xs: 'h3' } }} style={{fontWeight: 700}}>Education <span className="text-blue-500">&</span> Experience</Typography>
                <Typography sx={{ typography: { md: 'h3', sm: 'h4', xs: 'h5' } }} style={{fontWeight: 600}}>Some of the work I&apos;ve been doing</Typography>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 xl:grid-cols-2 w-[75vw]">
                    {experiences.map((item, index) => (
                        <ExpCard key={index} company={item.company} title={item.title} timeframe={item.timeframe} description={item.description}/>
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
};

export default Research;
