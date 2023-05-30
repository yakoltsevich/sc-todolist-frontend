import {deleteTask, editTask, getAllTasks, saveTask} from "../../http/api/tasksApi";
import {DELETE_TASK, EDIT_TASK, GET_TASKS, REQUEST, SAVE_TASK, SUCCESS} from "./actionTypes";
import {Dispatch} from "redux";
import {errorHandler} from "./errorHandler";

type CallbackFN = () => void

export const getAllTasksAction = (userId: string) =>
    (dispatch: Dispatch) => {
        dispatch({
            type: GET_TASKS + REQUEST
        })
        getAllTasks(userId)
            .then((res) => {
                dispatch({
                    type: GET_TASKS + SUCCESS,
                    payload: res.data
                })
            })
            .catch(errorHandler)
    }

export const saveTaskAction = (text: string, userId: string, callback: CallbackFN) =>
    (dispatch: Dispatch) => {
        saveTask(text, userId)
            .then((res) => {
                dispatch({
                    type: SAVE_TASK + SUCCESS,
                    payload: res.data
                })
                callback()
            })
            .catch(errorHandler)
    }

export const editTaskAction = ({id, text}: { id: string, text: string }, callback: CallbackFN) =>
    (dispatch: Dispatch) => {
        editTask({id, text})
            .then((res) => {
                dispatch({
                    type: EDIT_TASK + SUCCESS,
                    payload: res.data
                })
                callback()
            })
            .catch(errorHandler)
    }

export const deleteTaskAction = (id: string, callback: CallbackFN) =>
    (dispatch: Dispatch) => {
        deleteTask(id)
            .then((res) => {
                dispatch({
                    type: DELETE_TASK + SUCCESS,
                    payload: res.data
                })
                callback()
            })
            .catch(errorHandler)

    }
