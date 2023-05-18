import React, { ChangeEvent, useEffect, useState } from 'react';
import './Login.css';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { UsuarioLogin } from '../../model/UsuarioLogin';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';

function Login() {

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        token: ''
    })

    function updateModel(event: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            navigate('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, usuarioLogin, setToken)

            alert('Usuário logado com sucesso!');
        } catch (error) {
            alert('Dados do usuário inconsistentes. Erro ao logar!');
        }
    }

    return (
        <>
            <Grid container direction={'row'} justifyContent={'center'} alignItems={'center'}>
                <Grid item xs={6} alignItems={'center'}>
                    <Box paddingX={20}>
                        <form onSubmit={onSubmit}>
                            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{ fontWeight: 'bold' }}>Entrar</Typography>
                            <TextField id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth value={usuarioLogin.usuario} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}> </TextField>
                            <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth value={usuarioLogin.senha} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} > </TextField>
                            <Box marginTop={2} textAlign={'center'}>

                                <Button type='submit' variant='contained' color='primary' >
                                    Logar
                                </Button>

                            </Box>
                        </form>
                        <Box display='flex' justifyContent='center' marginTop={2}>
                            <Box marginRight={1}>
                                <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                            </Box>
                            <Link to='/cadastrousuario'>
                                <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                            </Link>

                        </Box>
                    </Box>
                </Grid>
                <Grid className='imageLogin' item xs={6}>  </Grid>
            </Grid>
        </>
    )
}

export default Login
