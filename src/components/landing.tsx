import { Typography } from "@mui/material";
import React from "react";

const Landing = () => {
    return ( 
        <React.Fragment>

            <Typography sx={{ typography: { md: 'h1', sm: 'h2', xs: 'h3' } }} style={{fontWeight: 700}}><span className="text-blue-500">Hari</span>krishna Vardhineedi</Typography>

            <Typography sx={{ typography: { md: 'h3', sm: 'h4', xs: 'h5' } }} style={{fontWeight: 700}}>Student with a passion for <u><span className="text-blue-500">Full-Stack</span></u><br/> and <u><span className="text-blue-500">Systems</span></u></Typography>
            <div className="custom-shape-divider-bottom-1743409189">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>
        </React.Fragment>
    );
}
 
export default Landing;