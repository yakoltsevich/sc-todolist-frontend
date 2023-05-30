import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import {handleLogout} from "../store/actions/userActions";
import {FC, useEffect} from "react";
import {APP_ROUTES} from "../shared/constant";
import {ButtonGroup} from "@mui/material";
import Typography from "@mui/material/Typography";

export const Header:FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const user = useAppSelector(state => state.user.user)

    useEffect(() => {
        if (user) {
            navigate(APP_ROUTES.todoList)
        }
    }, [user, navigate])


    const onClickLogout = () => {
        dispatch(handleLogout())
        navigate(APP_ROUTES.login)
    }
    const onClickSignIn = () => {
        navigate(APP_ROUTES.login)
    }
    const onClickSignUp = () => {
        console.log(APP_ROUTES.registration)
        navigate(APP_ROUTES.registration)
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    {user &&
                        <Typography variant="h6" component="h2" sx={{paddingRight: '10px'}}>{user.name}</Typography>}
                    {user
                        ? (<Button color='inherit' variant="outlined" onClick={onClickLogout}>Logout</Button>)
                        : (<ButtonGroup variant="outlined" aria-label="outlined button group">
                            <Button color="inherit" onClick={onClickSignIn}>Sign In</Button>
                            <Button color="inherit" onClick={onClickSignUp}>Sing UP</Button>
                        </ButtonGroup>)}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
