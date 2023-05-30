import {axiosClient} from "../index";

const BASE_URL = 'tasks'

export const getAllTasks = (userId: string) => axiosClient.get(BASE_URL + '/' + userId)
export const saveTask = (text: string, userId: string) => axiosClient.post(BASE_URL, {text, userId})
export const editTask = ({id, text}: { id: string, text: string }) => axiosClient.patch(BASE_URL + '/' + id, {text})
export const deleteTask = (id: string) => axiosClient.delete(BASE_URL + '/' + id)
