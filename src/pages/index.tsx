import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import SideNav from "@/components/sideNav";
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useScrollBottom from "@/hooks/useScrollBottom";

export default function Home() {
  
  const isBottom = useScrollBottom();

  const restOfName = "krishnaVardhineedi";
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const [blinker, setBlinker] = useState(true);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    let nameWriteID = setTimeout(function() {
      if (count >= restOfName.length-1) {
        clearTimeout(nameWriteID);
      } else {
        setCount(prev => prev + 1);
      }
      if (restOfName[count] === 'a' && restOfName[count+1] === 'V') {
        setName(prev => prev + restOfName[count] + ' ');
      } else {
        setName(prev => prev + restOfName[count]);
      }    
    }, 75);

    return () => {
      clearTimeout(nameWriteID);
    };
  }, [count]);

  useEffect(() => {
    let blinkerID = setTimeout(function() {
        setBlinker(prev => !prev);     
    }, 500);

    return () => {
      clearTimeout(blinkerID);
    };
  }, [blinker]);

  useEffect(() => {
    if (isBottom) {
      setTimeout(() => {setShowMore(true);}, 1000);
    }
  }, [isBottom]);

  
  return (
    <React.Fragment>
      <SideNav></SideNav>

      {/* Landing */}
      <Box className="w-screen h-[90vh] flex flex-col items-center justify-center text-center relative">
        <div className="flex flex-row">
          <Typography variant="h1" style={{fontWeight: 700}} className="blue-text">Hari</Typography>
          <Typography variant="h1" style={{fontWeight: 700}}>{name}</Typography>
          {blinker ? ( <Typography variant="h1" style={{fontWeight: 700}}>|</Typography> ) : (<Typography variant="h1" style={{fontWeight: 700, visibility: 'hidden'}}>|</Typography>)}
        </div>
        <Typography variant="h3" style={{fontWeight: 700}}>Student with a passion for <u>full-stack</u><br/> and <u>distributed systems</u></Typography>
        <div className="custom-shape-divider-bottom-1743325115">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </div>
      </Box>

      

      

      {/* Projects */}
      <Box className="w-screen h-screen flex flex-col bg-blue-200"></Box>


      {/* Education */}
      <Box className="w-screen h-[75vh] flex flex-row bg-blue-300 items-center justify-center">
        <Card sx={{ width: 350 }} style={{backgroundColor: 'var(--color-blue-100)', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'}}>
          <CardHeader
            title="UC Irvine"
            subheader="B.S. Computer Science"
          />
          <CardMedia
            component="img"
            height="194"
            image="/ucirvine.jpg"
            alt="UC Irvine"

          />
          <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Specialized in Algorithms<br/>
            Took courses in Database, Information Retrieval, Machine Learning, Quantum Computing, Data Structures, Algorithms, and much more
          </Typography>
        </CardContent>
        <CardActions>
            <Typography variant="body2" className="pl-2 pb-2">Sep. 2022 - Dec. 2025</Typography>
          </CardActions>
        </Card>
      </Box>

      
      {/* Contact */}
      <Box className="w-screen h-screen flex flex-col bg-blue-400"></Box>

      {/* Footer */}
      <Box className="w-screen h-[25vh] flex flex-col bg-blue-700"></Box>

      {/* Secret */}
      {showMore ? <Box className="w-screen h-[10vh] flex flex-col bg-black items-center justify-center">
        <Typography variant="h5" style={{fontWeight: 700, color: 'white'}}>There's a million thing I haven't done. But just you wait...</Typography>
      </Box> : <></>}


    </React.Fragment>
  );
}
