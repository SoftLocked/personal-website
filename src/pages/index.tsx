import SideNav from "@/components/sideNav";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useScrollBottom from "@/hooks/useScrollBottom";

import Landing from "@/components/landing";
import Projects from "@/components/projects";
import Education from "@/components/education";
import Footer from "@/components/footer";
import UpdateBanner from "@/components/updateBanner";

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

      <UpdateBanner/>
      
      <SideNav></SideNav>

      {/* Landing */}
      <Box id="landing" className="min-w-screen min-h-[100vh] flex flex-col items-center justify-center text-center relative px-5">
        <Landing/>
      </Box>

      {/* Projects */}
      <Box id="projects" className="min-w-screen min-h-screen flex flex-col bg-blue-200 relative px-5 pb-[200px]">
        <Projects/>
      </Box>

      {/* Education */}
      <Box id="experience" className="min-w-screen min-h-[90vh] bg-blue-300 relative pb-25 px-5">
        <Education/>
      </Box>

      {/* Footer */}
      <Box id="footer" className="min-w-screen min-h-[25vh] lg:min-h-[20vh] flex bg-blue-700 text-white relative justify-center">
        <Footer/>
      </Box>

      {/* Secret */}
      {showMore ? <Box className="w-screen min-h-[10vh] flex flex-col bg-neutral-800 items-center justify-center text-center px-5">
        <Typography variant="h5" style={{fontWeight: 700, color: 'white'}} className="py-5">There&apos;s a million things I haven&apos;t done. But just you wait...</Typography>
      </Box> : <></>}


    </React.Fragment>
  );
}
