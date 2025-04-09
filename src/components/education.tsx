import { Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import React from "react";
import ExpCard from "./expCard";



const Education = () => {

    const experiences = [
        { company:"UC Irvine", title:"B.S. Computer Science", timeframe:"Sep 2022 - Jun 2025", description: `
            Specialized in Algorithms. Took courses in Systems, Architecture, Database, Information Retrieval, Machine Learning, Quantum Computing, Complexity, Data Structures, Algorithms, and many more.`
        },
        { company:"Pickaxe", title:"Software Engineer Intern", timeframe:"Jun 2023 - Aug 2023", description:`
            Engineered a generative AI-driven Twitter marketing automation tool within 6 weeks, streamlining company marketing.
            Integrated GPT-4, Twitter API, LangChain, and FastAPI, reducing tweeting time by 80% while maintaining engagement.
            Automated end-to-end testing with Python Unittest, ensuring robust, maintainable code with 99% test coverage.`
        }
      ];

    return (
        <React.Fragment>
            <div className="flex justify-center pt-20 pb-10 text-center">
                <Typography variant="h1" style={{fontWeight: 700}}>Education <span className="text-blue-500">&</span> Experience</Typography>
            </div>
            <div className="flex justify-center items-center flex-col">
                {experiences.map((item, index) => (
                    <ExpCard company={item.company} title={item.title} timeframe={item.timeframe} description={item.description}/>
                
                ))}
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
};

export default Education;
