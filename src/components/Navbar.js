import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { Button, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';


const Navbar = () => {
    const user = true

    return (
        <AppBar color={"secondary"} position="static">
            <Toolbar>
                <Grid container justifyContent={"flex-end"}>
                    {user ?
                        <Button variant={"outlined"}>Выйти</Button>
                        :
                        <NavLink to={LOGIN_ROUTE}>
                            <Button variant={"outlined"}>Логин</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;