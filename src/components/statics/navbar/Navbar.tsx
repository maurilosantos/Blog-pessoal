import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";


// const pages = ['Início', 'Postagens', 'Temas', 'Cadastrar Tema'];
// const settings = ['Perfil', 'Conta', 'Visão Geral', 'Sair'];
// Breve: fazer o mesmo pra pages quando for fazer a rota.
const settings = [
    {
        nome: 'Perfil',
        link: '/'
    },
    {
        nome: 'Conta',
        link: '/'
    },
    {
        nome: 'Recomendações',
        link: '/'
    }
]

const pages = [
    {
        nome: 'Inicio',
        link: '/home'
    },
    {
        nome: 'Postagens',
        link: '/postagens'
    },
    {
        nome: 'Temas',
        link: '/temas'
    },
    {
        nome: 'Cadastrar Tema',
        link: '/formularioTema'
    }
]

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
        function goLogout(){
            alert("Usuário deslogado")
            navigate('/login')
        }

    return (
        <>
            <AppBar position="static" style={{backgroundColor: "#595b5a"}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Diversity1Icon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Blog Pessoal
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
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
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page.nome} style={{display: "block", margin: "10px"}} onClick={handleCloseNavMenu}>
                                        <Link to={page.link} className="text-decorator-none">
                                            <Typography textAlign="center" color="inherit" style={{ color: 'black' }}>{page.nome}</Typography>
                                        </Link>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Blog Pessoal
                        </Typography>
                        <Box gap={2} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page.nome}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: '#ffff', display: 'block' }}
                                    style={{color:"#ffff"}}
                                >
                                    <Link to={page.link} className="text-decorator-none">
                                        <Typography textAlign="center" color="inherit" style={{ color: 'white' }}>{page.nome}</Typography>
                                    </Link>
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Foto Perfil" src="https://media.licdn.com/dms/image/C4D03AQFdlK6-d7blgg/profile-displayphoto-shrink_800_800/0/1652486506638?e=1689811200&v=beta&t=mj2Tz4egbmgZOC-MT9aAbKR8e2uZFcCjwUfy0vESZ7I" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting.nome} style={{display: "block", margin: "10px"}} onClick={handleCloseUserMenu}>
                                        <Link to={setting.link} className="text-decorator-none">
                                            <Typography textAlign="center" color="inherit" style={{ color: 'black' }}>{setting.nome}</Typography>
                                        </Link>
                                    </MenuItem>
                                ))}
                                <MenuItem style={{display: "block", margin: "10px"}}>
                                <Typography onClick={goLogout} textAlign="center" color="inherit" style={{ color: 'black'}}>Sair</Typography>
                                </MenuItem>   
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
};

export default Navbar;