import { Typography } from "@mui/material";
import React from "react";
import ExpCard from "./expCard";



const About = () => {

    
    return (
        <React.Fragment>
            <div className="flex justify-center">
                <Typography sx={{ typography: { md: 'h1', sm: 'h2', xs: 'h3' } }} style={{fontWeight: 700}}>About my Work</Typography>
            </div>
            <div className="flex justify-center">
                
                <div className="flex justify-center w-[50vw] mt-10">
                    
                
                    <Typography sx={{ typography: { md: 'h5', sm: 'h5', xs: 'h6' } }}>We can prove remarkable things about quantum systems—their computational advantages, communication capabilities, and fundamental limits. However, as quantum technologies scale from proof-of-concept demonstrations to practical networks, designers need more than existence proofs; they need interpretable frameworks and paradigms to better inform the design of quantum systems. I'm interested in building these connections: extracting structural patterns from quantum problems that predict which resources or paradigms are most effective, enabling designers to make informed choices rather than exhaustively testing possibilities.</Typography>
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

export default About;
