import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import { Tooltip, Typography } from "@mui/material";

const Footer = () => {
    return ( 
        <React.Fragment>
            <div className="flex pt-10">
            
            
            </div>
            <div className="w-[90vw] md:w-[50vw] absolute bottom-7 grid grid-cols-2 items-end">
                <div className="text-left ">   
                    <Typography sx={{ typography: { xs:'h5' } }} style={{fontWeight: 700}}>Harikrishna Vardhineedi &copy; 2025</Typography>
                </div>
                <div className="text-right">
                    <Typography sx={{ typography: { xs:'h6' } }} style={{fontWeight: 300}}>Irvine, CA</Typography>
                </div>
                <div className="text-left">
                    <Typography sx={{ typography: { xs:'body1' } }} style={{fontWeight: 300}}>Developed with Next.js and Tailwind CSS. Deployed on Vercel.</Typography>
                </div>
                <div className="text-right">
                    <Tooltip title="LinkedIn" arrow>
                        <a href="https://www.linkedin.com/in/hvardhin/" target="_blank"><LinkedInIcon sx={{fontSize: 30}} className="ml-2 transition duration-100 ease-in-out hover:text-blue-300"/></a>
                    </Tooltip>
                    <Tooltip title="GitHub" arrow>
                    <a href="https://github.com/SoftLocked" target="_blank"><GitHubIcon   sx={{fontSize: 30}} className="ml-2 transition duration-100 ease-in-out hover:text-blue-300"/></a>
                    </Tooltip>
                    <Tooltip title="E-Mail" arrow>
                    <a href="mailto:harivardhineedi@gmail.com"><EmailIcon    sx={{fontSize: 30}} className="ml-2 transition duration-100 ease-in-out hover:text-blue-300"/></a>
                    </Tooltip>
                    <Tooltip title="Resume" arrow>
                    <a href="mailto:harivardhineedi@gmail.com"><DescriptionIcon    sx={{fontSize: 30}} className="ml-2 transition duration-100 ease-in-out hover:text-blue-300"/></a>
                    </Tooltip>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Footer;