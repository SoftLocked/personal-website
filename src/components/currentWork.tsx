import { Typography } from "@mui/material";
import React from "react";
import ProjectCard from "./projectCard";

const Current = () => {

    return ( 
        <React.Fragment>
            <div className="flex justify-center mt-15">
                <Typography sx={{ typography: { md: 'h1', sm: 'h2', xs: 'h3' } }} style={{fontWeight: 700}}>My Current Project</Typography>
            </div>

            <div className="flex justify-center">
                            <div className="flex flex-col justify-center sm:w-[75vw] mt-10">
                                <div className="grid grid-cols-2 gap-10">
                                    <div className="col-span-2 xl:col-span-1">
                                        <Typography sx={{ typography: { md: 'h5', sm: 'h5', xs: 'h6' } }}>Working with Dr. Shion Fukuzawa, I'm investigating how coordination structure in quantum tasks determines which types of entanglement succeed. My framework analyzes quantum nonlocal games to extract coordination signatures (whether games rely on pairwise interactions, triple interactions, or mixed patterns) and uses these signatures to predict optimal entanglement types.</Typography>
            
                                        <Typography sx={{ typography: { md: 'h5', sm: 'h5', xs: 'h6' }, marginTop: 5 }}>Prelminary tests across 953 three-qubit games reveals a highly convincing separation. GHZ states achieve optimal performance in 95.8% of games with pairwise coordination structure (503 of 525 games), while W states succeed in 98.3% of games requiring triple or mixed coordination (421 of 428 games). We're now extending this work toward a general classification framework and exploring robustness under realistic noise conditions.</Typography>

                                        <Typography sx={{ typography: { md: 'h5', sm: 'h5', xs: 'h6' }, marginTop: 5 }}>The figures on the right show visual clusters of regimes and strategies on all 953 games plotted by pairwise and triple energy. The clusters for regimes strongly correlate with the clusters for strategies. </Typography>
                                    </div>
                                    <div className="col-span-2 xl:col-span-1">
                                        <div className="flex justify-center ">
                                            <img src="strategy.png" className="rounded-[20px] mb-10 w-[30em]"></img>
                                        </div>
                                        <div className="flex justify-center">
                                            <img src="regime.png" className="rounded-[20px] mb-10 w-[30em]"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

            <div className="custom-shape-divider-bottom-1765069962">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            </svg>
</div>
            
        </React.Fragment>
    );
}
 
export default Current;