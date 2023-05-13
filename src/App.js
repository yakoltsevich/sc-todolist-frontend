import './App.css';
import {InteractiveList} from "./components/InteractiveList";
import React, {useEffect, useState} from "react";
import {InteractiveInput} from "./components/InteractiveInput";
import Box from '@mui/material/Box';
import {deleteTask, editTask, getAllTasks, saveTask} from "./api/tasksApi";
import Typography from "@mui/material/Typography";

const containerStyles = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}

export const App = () => {
    const [tasks, setTasks] = useState([])

    const updateList = () => {
        getAllTasks()
            .then(res => {
                setTasks(res.data)
            })
    }

    useEffect(updateList, [])


    const onClickSave = (task) => {
        saveTask(task).then(updateList)
    }

    const onClickDelete = (id) => {
        deleteTask(id).then(updateList)
    }

    const onClickSaveEdit = ({id, text}) => {
        editTask({id, text}).then(updateList)
    }

    return (
        <div className="App" style={containerStyles}>
            <Box sx={{width: '60%'}}>
                <Typography sx={{mb: 2}} variant="h6" component="div">
                    To-do list from server with DB
                </Typography>
                <InteractiveInput
                    onClick={onClickSave}
                />
                <InteractiveList
                    onClickSaveEdit={onClickSaveEdit}
                    onClickDelete={onClickDelete}
                    list={tasks}
                />
            </Box>
        </div>
    );
}
