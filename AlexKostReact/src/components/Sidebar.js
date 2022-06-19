import {
    Article,
    Group,
    Home,
    Person,
  } from "@mui/icons-material";
  import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
  } from "@mui/material";
  import React from "react";

  import InfoIcon from '@mui/icons-material/Info';
  import LinkIcon from '@mui/icons-material/Link';
  
  const Sidebar = ({mode,setMode}) => {
    return (
      <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="fixed">
          <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href="result">
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Головна" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="Schedule">
                <ListItemIcon>
                  <Article />
                </ListItemIcon>
                <ListItemText primary="Розклад" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="MuiTable">
                <ListItemIcon>
                  <Group />
                </ListItemIcon>
                <ListItemText primary="Результати" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="Resume">
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText primary="Резюме" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="About">
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="Інформація" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="CodeWords">
                <ListItemIcon>
                  <LinkIcon />
                </ListItemIcon>
                <ListItemText primary="Кодові слова" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    );
  };
  
  export default Sidebar;