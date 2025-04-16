'use client';
import { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Tooltip, Typography } from '@mui/material';
import Cookies from 'js-cookie';

const UpdateBanner = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const dismissed = Cookies.get('topBannerDismissed');
        if (!dismissed) {
        setVisible(true);
        }
    }, []);

    const handleClose = () => {
        // Set cookie to expire in 1 day
        Cookies.set('topBannerDismissed', 'true', { expires: 1 });
        setVisible(false);
    };

  if (!visible) return null;

    return (
        <div className="fixed top-0 w-full h-50 z-50">
            <div className='bg-blue-500 h-[calc(100%-49px)] text-white text-sm p-4'>
                <div className="h-full flex items-center justify-center">
                    <Typography sx={{ typography: { md: 'h4', sm: 'h4', xs: 'h5' } }} style={{fontWeight: 700}} className="text-center px-12">Just Won UCI 2025 Datathon! Check out the Project <a target='_blank' href='https://devpost.com/software/overboard-o09dem?_gl=1*19xl9l8*_gcl_au*MjA5OTgwNDAxNS4xNzQ0NDA2OTUw*_ga*ODYxOTM0MjU0LjE3NDQ0MDY5NTA.*_ga_0YHJK3Y10M*MTc0NDgyNDM3OS4xMi4xLjE3NDQ4MjUzNDQuMC4wLjA.'>
                            <Tooltip title='Devpost Link'>
                                <u className=' transition duration-100 ease-in-out hover:text-blue-300 cursor-pointer'>Here
                                </u>
                                </Tooltip>
                            </a>!
                    </Typography>
                    <Tooltip title="Dismiss" arrow>
                    <button
                        onClick={() => handleClose()}
                        className="absolute right-0 p-2 rounded-full text-white hover:bg-blue-400 transition"
                        aria-label="Close banner"
                    >
                        <CloseIcon />
                    </button>
                    </Tooltip>
                </div>
            </div>
            <div className=''> 
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