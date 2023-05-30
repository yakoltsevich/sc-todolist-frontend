import {axiosClient} from "../index";
import {HandleLoginProps, HandleRegistrationProps} from "../../store/actions/userActions";

const BASE_URL = 'auth'

export const login = (data: HandleLoginProps) => axiosClient.post(BASE_URL + '/login', data)
export const registration = (data: HandleRegistrationProps) => axiosClient.post(BASE_URL + '/registration', data)
export const logout = () => axiosClient.post(BASE_URL + '/logout')
export const refresh = () => axiosClient.get(BASE_URL + '/refresh')

