import { Tooltip, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import React from "react";

const Landing = () => {
    return ( 
        <React.Fragment>

                

            <Typography sx={{ typography: { md: 'h1', sm: 'h2', xs: 'h3' } }} style={{fontWeight: 700}}><span className="text-blue-500">Hari</span>krishna Vardhineedi</Typography>

            <Typography sx={{ typography: { md: 'h4', sm: 'h4', xs: 'h5' } }} style={{fontWeight: 700}}>Student with a passion for <span className="text-blue-500">Full-Stack Development</span></Typography>
            
            <div className="pt-4 text-blue-500 flex justify-end">
                <Tooltip title="LinkedIn" arrow>
                    <a href="https://www.linkedin.com/in/hvardhin/" target="_blank"><LinkedInIcon className="!w-8 !h-8 md:!w-12 md:!h-12 mx-2 transition duration-100 ease-in-out hover:text-blue-300"/></a>
                </Tooltip>
                <Tooltip title="GitHub" arrow>
                <a href="https://github.com/SoftLocked" target="_blank"><GitHubIcon className="!w-8 !h-8 md:!w-12 md:!h-12 mx-2 transition duration-100 ease-in-out hover:text-blue-300"/></a>
                </Tooltip>
                <Tooltip title="E-Mail" arrow>
                <a href="mailto:harivardhineedi@gmail.com"><EmailIcon className="!w-8 !h-8 md:!w-12 md:!h-12 mx-2 transition duration-100 ease-in-out hover:text-blue-300"/></a>
                </Tooltip>
                <Tooltip title="Resume" arrow>
                <a href="mailto:harivardhineedi@gmail.com"><DescriptionIcon className="!w-8 !h-8 md:!w-12 md:!h-12 mx-2 transition duration-100 ease-in-out hover:text-blue-300"/></a>
                </Tooltip>
            </div>
            
            <div className="custom-shape-divider-bottom-1743409189">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>
        </React.Fragment>
    );
}
 
export default Landing;