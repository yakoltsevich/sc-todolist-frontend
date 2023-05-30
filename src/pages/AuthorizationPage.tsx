import React, {BaseSyntheticEvent} from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {Link} from "react-router-dom";
import {handleLogin, handleRegistration} from "../store/actions/userActions";
import {useAppDispatch} from "../store/hooks";
import {APP_ROUTES} from "../shared/constant";
import Grid from "@mui/material/Grid";

export const AuthorizationPage = ({registration}: { registration?: boolean }) => {
    const dispatch = useAppDispatch()

    const handleSubmit = async (event: BaseSyntheticEvent) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        dispatch(
            registration
                ? handleRegistration({
                    email: formData.get("email"),
                    name: formData.get("name"),
                    password: formData.get("password"),
                })
                : handleLogin({
                    email: formData.get("email"),
                    password: formData.get("password"),
                })
        )
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h5">
                    {registration ? 'Registration' : 'Sign in'}
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    {registration && (
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="User Name"
                            name="name"
                            autoComplete="name"
                        />
                    )}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        {registration ? 'Registration' : 'Sign In'}
                    </Button>
                    {!registration && (
                        <Grid container>
                            <Link to={APP_ROUTES.registration}>
                                Don't have an account? Sign Up
                            </Link>
                        </Grid>
                    )}
                </Box>
            </Box>
        </Container>
    );
}