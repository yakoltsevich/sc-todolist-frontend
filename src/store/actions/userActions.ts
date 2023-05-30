import {login, logout, refresh, registration} from "../../http/api/authApi";
import {LOGIN, LOGOUT, SUCCESS} from "./actionTypes";
import {Dispatch} from "redux";
import {errorHandler} from "./errorHandler";
import {TOKEN_KEY} from "../../shared/constant";

export type HandleLoginProps = { email: FormDataEntryValue | null, password: FormDataEntryValue | null }
export const handleLogin = ({email, password}: HandleLoginProps) =>
    (dispatch: Dispatch) => {
        login({email, password})
            .then(({data: {accessToken, user}}) => {
                localStorage.setItem(TOKEN_KEY, accessToken)
                dispatch({
                    type: LOGIN + SUCCESS,
                    payload: user
                })
            })
            .catch(errorHandler)
    }

export type HandleRegistrationProps = { email: FormDataEntryValue | null, name: FormDataEntryValue | null, password: FormDataEntryValue | null }
export const handleRegistration = ({email, name, password}: HandleRegistrationProps) =>
    (dispatch: Dispatch) => {
        registration({email, name, password})
            .then(({data: {accessToken, user}}) => {
                localStorage.setItem(TOKEN_KEY, accessToken)
                dispatch({
                    type: LOGIN + SUCCESS,
                    payload: user
                })
            })
            .catch(errorHandler)
    }

export const handleCheckAuth = () =>
    (dispatch: Dispatch) => {
        refresh()
            .then(({data: {accessToken, user}}) => {
                localStorage.setItem(TOKEN_KEY, accessToken)
                dispatch({
                    type: LOGIN + SUCCESS,
                    payload: user
                })
            })
            .catch(errorHandler)
    }

export const handleLogout = () =>
    (dispatch: Dispatch) => {
        logout()
            .then(() => {
                localStorage.removeItem(TOKEN_KEY);
                dispatch({
                    type: LOGOUT
                })
            })
            .catch(errorHandler)
    }
