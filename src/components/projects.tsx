import { Typography } from "@mui/material";
import React from "react";

const Projects = () => {

    const projects = [
        {}, {}, {}
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
            <div className="custom-shape-divider-bottom-1743408918">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" className="shape-fill"></path>
                </svg>
            </div>
        </React.Fragment>
    );
}
 
export default Projects;