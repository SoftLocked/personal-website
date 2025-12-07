import SideNav from "@/components/sideNav";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useScrollBottom from "@/hooks/useScrollBottom";

import Landing from "@/components/landing";
import Footer from "@/components/footer";
import About from "@/components/about";
import Current from "@/components/currentWork";
import Teaching from "@/components/teaching";

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

      {/*<UpdateBanner/> */}
      
      <SideNav></SideNav>

      {/* Landing */}
      <Box id="landing" className="min-w-screen min-h-[100vh] flex flex-col justify-center items-center text-center relative px-5">
        <Landing/>
      </Box>

      {/* About */}
      <Box id="about" className="min-w-screen min-h-[100vh] bg-blue-200 relative pb-25 px-5">
        <About/>
      </Box>

      {/* Current Work */}
      <Box id="current_work" className="min-w-screen min-h-screen flex flex-col bg-blue-300 relative px-5 pb-[200px]">
        <Current/>
      </Box>

      {/* Current Work */}
      <Box id="teaching" className="min-w-screen min-h-screen flex flex-col bg-blue-400 relative px-5 pb-[200px]">
        <Teaching/>
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
