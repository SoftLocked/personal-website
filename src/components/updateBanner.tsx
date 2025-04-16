'use client';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Tooltip, Typography } from '@mui/material';

const UpdateBanner = () => {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div className="fixed top-0 w-full h-37 z-50">
            <div className='bg-blue-500 h-25 text-white text-sm p-4'>
                <div className="h-full relative flex items-center justify-center">
                    <Typography variant='h4' fontWeight={700} className="text-center">Just Won UCI 2025 Datathon! Check out the Project <a target='_blank' href='https://devpost.com/software/overboard-o09dem?_gl=1*19xl9l8*_gcl_au*MjA5OTgwNDAxNS4xNzQ0NDA2OTUw*_ga*ODYxOTM0MjU0LjE3NDQ0MDY5NTA.*_ga_0YHJK3Y10M*MTc0NDgyNDM3OS4xMi4xLjE3NDQ4MjUzNDQuMC4wLjA.'>
                            <Tooltip title='Devpost Link'>
                                <u className=' transition duration-100 ease-in-out hover:text-blue-300 cursor-pointer'>Here
                                </u>
                                </Tooltip>
                            </a>!
                    </Typography>
                    <Tooltip title="Dismiss" arrow>
                    <button
                        onClick={() => setVisible(false)}
                        className="absolute right-0 p-2 rounded-full text-white hover:bg-blue-400 transition"
                        aria-label="Close banner"
                    >
                        <CloseIcon />
                    </button>
                    </Tooltip>
                </div>
            </div>
            <div>
                <div className="custom-shape-divider-bottom-2">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                            className="shape-fill"
                        ></path>
                    </svg>
                </div>
            </div>
        </div>

    );
}

export default UpdateBanner;