import { useTheme, Box, IconButton, InputBase, rgbToHex } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import {NavLink} from 'react-router-dom'


const Topbar = () => {
  return (
    <Box display="flex" justifyContent="space-between" position='sticky' p={2}>
      <Box display="flex" className="searchbar"> 
        <Box
          display="flex" className="searchField"
        >
          <InputBase  placeholder="Search" />
          <IconButton type="button" className="searchButton">
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
      <Box display="flex">
        <NavLink to={'/Notification'} style={{backgroundColor: '#F0F0F0', paddingTop:'5px'}}>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        </NavLink>
        <NavLink to={'/Settings'} style={{backgroundColor: '#F0F0F0', paddingTop:'5px'}}>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        </NavLink>
        <NavLink to={'/Profile'} style={{backgroundColor: '#F0F0F0', paddingTop:'5px'}}>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
        </NavLink>
      </Box>
    </Box>
  );
};

export default Topbar;
