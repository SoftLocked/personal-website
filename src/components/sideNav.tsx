"use client";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function SideNav() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen width for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile if < 768px
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle Drawer for mobile
  const toggleDrawer = (open:boolean) => () => {
    setOpen(open);
  };

  // Navigation Links
  const navLinks = [
    { text: "Home", href: "#landing", icon: <HomeIcon /> },
    { text: "Projects", href: "#projects", icon: <ContactMailIcon /> },
    { text: "Education", href: "#education", icon: <InfoIcon /> }
  ];

  return (
    <>
      {/* Show Menu Icon Button for Mobile */}
      {isMobile && (
        <IconButton
          className="fixed top-4 left-4 z-50 z-1"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon className="text-gray-800" />
        </IconButton>
      )}

      {/* Drawer for Mobile */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        className="md:hidden"
      >
        <div className="w-46 bg-blue-200 h-full z-1">
          <List>
            {navLinks.map((item, index) => (
              <Link href={item.href} key={index} passHref>
                <ListItem
                  className="hover:bg-blue-100"
                  onClick={toggleDrawer(false)}
                >
                  <ListItemIcon className="">{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      </Drawer>

      {/* Persistent Sidebar for Desktop */}
      {!isMobile && (
        <div className="hidden md:flex md:flex-col w-40 h-screen bg-transparent fixed md:justify-center z-1">
          <List className="">
            {navLinks.map((item, index) => (
              <Link href={item.href} key={index} passHref>
                <ListItem className="">
                  <ListItemIcon className="">{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      )}
    </>
  );
}
