import React from "react";
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import './Home.css';

function Home() {
    return (
        < >
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#14c3a2" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={10} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Compartilhe textos!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "#595b5a", backgroundColor: "#7cf49a", color: "#595b5a" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://raw.githubusercontent.com/maurilosantos/frontBlog/c5e97073d92e0fdfdce730a3a15870f87457fd01/src/assets/home.svg" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>

        </>
    );
}

export default Home;