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
      <Box className="min-w-screen min-h-[90vh] flex flex-col items-center justify-center text-center relative px-5">
        <Landing/>
      </Box>

      {/* Projects */}
      <Box className="min-w-screen min-h-screen flex flex-col bg-blue-200 relative px-5">
        <Projects/>
      </Box>

      {/* Education */}
      <Box className="min-w-screen min-h-[90vh] bg-blue-300 relative pb-25 px-5">
        <Education/>
      </Box>

      
      {/* Skills */}
      <Box className="min-w-screen min-h-screen flex flex-col bg-blue-400 relative px-5">
        <Skills/>
      </Box>

      {/* Footer */}
      <Box className="min-w-screen min-h-[25vh] flex flex-col bg-blue-700 px-5"></Box>

      {/* Secret */}
      {showMore ? <Box className="w-screen min-h-[10vh] flex flex-col bg-black items-center justify-center text-center px-5">
        <Typography variant="h5" style={{fontWeight: 700, color: 'white'}}>There's a million thing I haven't done. But just you wait...</Typography>
      </Box> : <></>}


    </React.Fragment>
  );
}
