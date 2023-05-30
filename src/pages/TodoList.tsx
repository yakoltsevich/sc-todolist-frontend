import './../App.css';
import {InteractiveList} from "../components/InteractiveList";
import React, {useEffect} from "react";
import {InteractiveInput} from "../components/InteractiveInput";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import {deleteTaskAction, editTaskAction, getAllTasksAction, saveTaskAction} from "../store/actions/tasksActions";

import {useAppSelector, useAppDispatch} from '../store/hooks'
import {CircularProgress} from "@mui/material";

export const TodoList = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user.user)
    const isFetching = useAppSelector((state) => state.tasks.isFetching)
    const tasks = useAppSelector((state) => state.tasks.tasks)

    const updateList = () => {
        if (user) {
            dispatch(getAllTasksAction(user._id))
        }
    }

    useEffect(updateList, [user, dispatch])

    const onClickSave = (text: string) => {
        dispatch(saveTaskAction(text, user._id, updateList))
    }

    const onClickDelete = (id: string) => {
        dispatch(deleteTaskAction(id, updateList))
    }

    const onClickSaveEdit = ({id, text}: { id: string, text: string }) => {
        dispatch(editTaskAction({id, text}, updateList))
    }

    return (
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Box sx={{width: '60%'}}>
                <Typography sx={{mb: 2, textAlign: 'center'}} variant="h6" component="div">
                    To-do list from server with DB
                </Typography>
                <InteractiveInput
                    onClick={onClickSave}
                />
                {isFetching
                    ? (<CircularProgress/>)
                    : (<InteractiveList
                        onClickSaveEdit={onClickSaveEdit}
                        onClickDelete={onClickDelete}
                        list={tasks}
                    />)}
            </Box>
        </Box>
    );
}
