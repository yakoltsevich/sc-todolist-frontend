import axios from "axios";

const BASE_URL = 'http://127.0.0.1:8000/api/tasks'

export const getAllTasks = async () => axios.get(BASE_URL)

export const saveTask = (text) => axios.post(BASE_URL, {text})

export const editTask = ({id, text}) => axios.put(BASE_URL, {id, text})

export const deleteTask = (id) => axios.delete(BASE_URL + '/' + id)
