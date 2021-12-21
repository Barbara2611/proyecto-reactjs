import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CartWidget from "./CartWidget";
import Drawer from '@mui/material/Drawer'
import { Link } from 'react-router-dom';
import List from './List' ;
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import "./navbar.css" ;




const Navbar = () => {

 
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const opens = Boolean(anchorEl);

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


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
           <Link to="/"> <MenuItem className='menu bar'> Home </MenuItem> </Link>
          </Typography>

          <Button 
            color="inherit"
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={opens ? 'true' : undefined}
            onClick={handleClick}
          >
            Categorias
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={opens}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <Link to={`/category/remeras`} style={{ textDecoration: 'none', color: '#EC7063' }} > <MenuItem >  REMERAS  </MenuItem></Link>
            <Link to={`/category/vestidos`} style={{ textDecoration: 'none', color: '#EC7063' }} > <MenuItem >  VESTIDOS </MenuItem></Link>
            <Link to={`/category/jeans`} style={{ textDecoration: 'none', color: '#EC7063' }} > <MenuItem >  JEANS  </MenuItem></Link>
            <Link to={`/category/shorts`} style={{ textDecoration: 'none', color: '#EC7063' }} > <MenuItem >  SHORTS  </MenuItem></Link>
            <Link to={`/category/blusas`} style={{ textDecoration: 'none', color: '#EC7063' }} > <MenuItem >  BLUSAS </MenuItem></Link>
            <Link to={`/category/chanclas`} style={{ textDecoration: 'none', color: '#EC7063' }} > <MenuItem >  CHANCLAS  </MenuItem></Link>

          </Menu>







           <Link to="/Cart"> <CartWidget className='cardwidget'/> </Link>
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
