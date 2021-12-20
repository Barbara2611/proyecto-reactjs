import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CardWidget from "./CardWidget";
import Drawer from '@mui/material/Drawer'
import { Link } from 'react-router-dom';
import List from './List' ;
import { MenuItem } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import "./navbar.css" ;




const Navbar = () => {

 
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }


  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='appbar'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}>
           <Link to="/" className='bar'> Bumbleblee </Link>
           <Link to="/Nosotros"> <MenuItem className='menu bar'> Home </MenuItem> </Link>
           <Link to="/Category"> <MenuItem className='menu bar'> Category </MenuItem> </Link>
          </Typography>
           <Link to="/Cart"> <CardWidget className='cardwidget'/> </Link>
          <Button color="inherit">Login</Button>
        </Toolbar>

      </AppBar>
      <Drawer variant="persistent" anchor="left" open={open}>
     
        <IconButton onClick={handleDrawerClose}> <ArrowBackIosNewIcon></ArrowBackIosNewIcon> </IconButton>
        <List />
      </Drawer>
      
    </Box>
  );
}

export default Navbar;
