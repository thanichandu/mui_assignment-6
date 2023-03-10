import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import CustomIcon from '../iconComponnets/Logo';
import logo from "../Assets/react-logo.svg"
// import CloseIcon from '@mui/icons-material/Close';
// import { textAlign } from '@mui/system';
import "../css/header.css"
import Button1 from './button1';


// const pages = ['Demos', 'Home', 'Works', 'Service', 'Pricing', 'Contact'];
const pages = [{pageName:"Demos",idValue:"#HomeMain"},
{pageName:"Home",idValue:"#HomeMain"},
{pageName:"Works",idValue:"#WorkMain"},
{pageName:"Service",idValue:"#ServiceMain"},
{pageName:"Pricing",idValue:"#PriceMain"},
{pageName:"Contact",idValue:"#FootersMain"}];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    // const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
        console.log("okkkk")
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="sticky" sx={{ backgroundColor: 'white', boxShadow: "none" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <img src={logo} alt="" /> */}
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    {/* header list                                                                 */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} justifyContent='flex-end'>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="black"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none', color: "black" },
                            }}
                        >
                            <img textAlign="center" src={logo} alt="" />
                            {/* <svg sx={{color:"black"}} data-testid="CloseIcon"></svg> */}
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu} >
                                    <Typography textAlign="center">{page.pageName}</Typography>
                                </MenuItem>
                            ))}
                            <Box sx={{ '& button': { m: 1 } }}>

                                <Button variant="outlined" size="small" className='button-container1'>
                                    login
                                </Button>

                                <Button variant="outlined" size="small" className='button-container2'>
                                    signup
                                </Button>


                            </Box>
                        </Menu>
                    </Box>



                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} >
                        <img src={logo} alt="" />
                        {pages.map((page) => (
                            <Typography sx={{ fontFamily: 'Roboto, "Helvetica Neue", sans-serif' }}>
                                <Button
                                    href={page.idValue}
                                    key={page}
                                    
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2, color: 'black', display: 'block', paddingLeft: "30px", fontSize: ".875rem"
                                    }}
                                >
                                    {page.pageName.toLowerCase()}
                                </Button>
                            </Typography>
                        ))}
                    </Box>
                    {/* <Box sx={{ '& button': { m: 1 }, display: { xs: 'none', md: 'flex' } }} >

                        <Button variant="outlined" size="medium" className='button-container1'>
                            login
                        </Button>

                        <Button variant="outlined" size="medium" className='button-container2'>
                            signup
                        </Button>


                    </Box> */}
                    <Button1 />
                    


                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;