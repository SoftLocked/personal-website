import { Typography } from "@mui/material";
import React from "react";

const Teaching = () => {

    return ( 
        <React.Fragment>
            {/* Section Header */}
            <div className="flex justify-center text-center pt-10 sm:pt-0">
                <Typography sx={{ typography: { md: 'h1', sm: 'h2', xs: 'h3' } }} style={{fontWeight: 700}}>Teaching Experience</Typography>
            </div>
      
            <div className="flex justify-center">  
                <div className="flex flex-col justify-center w-[50vw] md:w-[25vw] mt-5">
                    <Typography sx={{ typography: { md: 'h5', sm: 'h5', xs: 'h6' } }} style={{fontWeight: 700}}>&quot;If you cannot explain something in simple terms, you don&apos;t understand it&quot;<br></br>- Richard Feynmann</Typography>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="flex flex-col justify-center sm:w-[75vw] mt-10">
                    <div className="grid grid-cols-2 gap-10">
                        <div className="col-span-2 xl:col-span-1">
                            <Typography sx={{ typography: { md: 'h5', sm: 'h5', xs: 'h6' } }}>Over the past three years, I&apos;ve taught and mentored over 2,000 UC Irvine students across foundational computer science courses. As Lead Grader for boolean logic and discrete mathematics across 5 quarters, I managed instructional teams of 15-20 staff members, coordinated mentorship for 400+ students per term, and built automation tools that reduced logistics time by half. I&apos;ve also served as Learning Assistant for Data Structures and Algorithms, Formal Languages and Automata, Principles in System Design, and Discrete Mathematics, gaining insight into how students build problem-solving intuition across different levels of abstraction.</Typography>
                        
                            <Typography sx={{ typography: { md: 'h5', sm: 'h5', xs: 'h6' }, marginTop: 5}}>My teaching experiences also sparked deeper questions about pedagogy: working with Professor Michael Shindler and M.S. student Anshul Arunachalam, I&apos;m investigating how active journaling improves algorithmic problem-solving through a randomized controlled trial with 50+ students. I built a full-stack research platform for automated data collection, with initial results showing significant benefits. We&apos;re preparing findings for SIGCSE 2027. My goal is to become a professor who creates environments where students from unconventional backgrounds discover that their unique paths are strengths, not obstacles.</Typography>
                        </div>
                        <div className="col-span-2 xl:col-span-1">
                            <div className="flex justify-center flex-col">
                                <img alt="Organized Exams as produced by my exam automation script for discrete mathematics." src="exam_stack.jpg" className="rounded-[20px] mb-3 w-[600em]"></img>
                                <Typography sx={{ typography: { md: 'h6', sm: 'h6', xs: 'h6' }}}>Organized Exams as produced by my exam automation script for discrete mathematics.</Typography>
                            </div>
                        </div>
                    </div>
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
 
export default Teaching;