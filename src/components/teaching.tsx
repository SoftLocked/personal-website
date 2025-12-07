import { Typography } from "@mui/material";
import React from "react";
import ProjectCard from "./projectCard";

const Teaching = () => {

    return ( 
        <React.Fragment>
            <div className="flex justify-center mt-15">
                <Typography sx={{ typography: { md: 'h1', sm: 'h2', xs: 'h3' } }} style={{fontWeight: 700}}>My Teaching Experience</Typography>
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