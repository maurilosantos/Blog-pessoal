import React, { useState } from "react";
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
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import { toast } from "react-toastify";
import './Navbar.css'
import Usuario from "../../../model/Usuario";
import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';

const settings = [
    {
        nome: 'Perfil',
        link: '/perfil'
    }
]

const pages = [
    {
        nome: 'Início',
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

const Inicialpages = [
    {
        nome: 'Início',
        link: '/'
    },
    {
        nome: 'Sobre Nós',
        link: '/sobre'
    },
    {
        nome: 'Contato',
        link: '/'
    }

]

function Navbar() {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const location = useLocation();
    const currentUrl = location.pathname;

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

    const userId = useSelector<TokenState, TokenState['id']>((state) => state.id)
    const [usuarios, setUsuarios] = useState<Usuario[]>([])



    const dispatch = useDispatch();
    let navigate = useNavigate();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        navigate('/')
    }

    var navbarComponent;

    if (token != "") {

        navbarComponent = <AppBar position="static" style={{ backgroundColor: "#ffffff", boxShadow: 'none' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters style={{ color: 'black' }}>


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
                                <MenuItem key={page.nome} style={{ display: "block", margin: "10px" }} onClick={handleCloseNavMenu}>
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
                        style={{ color: '#1b1ee9' }}
                    >
                        Blog Pessoal
                    </Typography>
                    <Box gap={1} sx={{
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: 'center', // Centraliza horizontalmente os itens
                        alignItems: 'center', // Centraliza verticalmente os itens
                        width: '100%'
                    }}>
                        {pages.map((page) => (
                            <Button
                                key={page.nome}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#ffff', display: 'block' }}
                                style={{ color: "#ffff" }}
                            >
                                <Link to={page.link} className="text-decorator-none">
                                    <Typography textAlign="center" color="inherit" style={{ color: 'black' }}>{page.nome}</Typography>
                                </Link>
                            </Button>
                        ))}

                    </Box>

                    <NotificationsNoneTwoToneIcon style={{ marginRight: 10}} />

                    <Box sx={{ flexGrow: 0 }}>

                        <Tooltip title="Abra configurações">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Foto Perfil" src={''} />
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
                                <MenuItem key={setting.nome} style={{ display: "block", margin: "10px" }} onClick={handleCloseUserMenu}>
                                    <Link to={setting.link} className="text-decorator-none">
                                        <Typography textAlign="center" color="inherit" style={{ color: 'black' }}>{setting.nome}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                            <MenuItem style={{ display: "block", margin: "10px" }}>
                                <Typography onClick={goLogout} textAlign="center" color="inherit" style={{ color: 'black' }}>Sair</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>


    } else if (currentUrl == '/login' || currentUrl == '/cadastro') {

        navbarComponent = (null)

    } else {
        navbarComponent = <AppBar position="static" style={{ backgroundColor: "#ffffff", boxShadow: 'none' }}>
            <Container >
                <Toolbar disableGutters style={{ color: 'black' }}>

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
                        style={{ color: '#527146' }}
                    >
                        <img src="" />
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
                            {Inicialpages.map((page) => (
                                <MenuItem key={page.nome} style={{ display: "block", margin: "10px" }} onClick={handleCloseNavMenu}>
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
                        style={{ color: '#1b1ee9' }}
                    >
                        Blog Pessoal
                    </Typography>
                    <Box
                        sx={{

                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'center', // Centraliza horizontalmente os itens
                            alignItems: 'center', // Centraliza verticalmente os itens
                            width: '100%'

                        }}>
                        {Inicialpages.map((page) => (
                            <Button
                                className="navbar-inicial"
                                key={page.nome}
                                onClick={handleCloseNavMenu}
                                sx={{ color: '#ffff', display: 'block' }}
                                style={{ color: "#ffff" }}
                            >
                                <Link to={page.link} className="text-decorator-none">
                                    <Typography textAlign="center" alignItems={'center'} color="inherit" style={{ color: 'black' }}>{page.nome}</Typography>
                                </Link>
                            </Button>
                        ))}
                    </Box>


                </Toolbar>
            </Container>
        </AppBar>
    }

    return (
        <>
            {navbarComponent}
        </>

    )
};

export default Navbar;