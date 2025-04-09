import { Typography } from "@mui/material";
import React from "react";

const Skills = () => {
    return ( 
        <React.Fragment>
            <div className="flex justify-center p-10 text-center">
                <Typography sx={{ typography: { md: 'h1', sm: 'h2', xs: 'h3' } }} style={{fontWeight: 700}}>Technical Skills</Typography>
            </div>
        </React.Fragment>
    );
}
 
export default Skills;