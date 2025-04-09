import SideNav from "@/components/sideNav";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useScrollBottom from "@/hooks/useScrollBottom";

import Landing from "@/components/landing";
import Projects from "@/components/projects";
import Education from "@/components/education";
import Skills from "@/components/skills";

export default function Home() {
  
  const isBottom = useScrollBottom();
  const [showMore, setShowMore] = useState(false);

  

  useEffect(() => {
    if (isBottom) {
      setTimeout(() => {setShowMore(true);}, 1000);
    }
  }, [isBottom]);

  
  return (
    <React.Fragment>
      <SideNav></SideNav>

      {/* Landing */}
      <Box className="w-screen min-h-[98vh] flex flex-col items-center justify-center text-center relative">
        <Landing/>
      </Box>

      {/* Projects */}
      <Box className="w-screen min-h-[120vh] flex flex-col bg-blue-200 pb-30 relative">
        <Projects/>
      </Box>

      {/* Education */}
      <Box className="w-screen min-h-[90vh] bg-blue-300 relative">
        <Education/>
      </Box>

      
      {/* Skills */}
      <Box className="w-screen min-h-screen flex flex-col bg-blue-400 relative">
        <Skills/>
      </Box>

      {/* Footer */}
      <Box className="w-screen min-h-[25vh] flex flex-col bg-blue-700"></Box>

      {/* Secret */}
      {showMore ? <Box className="w-screen min-h-[10vh] flex flex-col bg-black items-center justify-center">
        <Typography variant="h5" style={{fontWeight: 700, color: 'white'}}>There's a million thing I haven't done. But just you wait...</Typography>
      </Box> : <></>}


    </React.Fragment>
  );
}
