import * as React from 'react';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import RedoIcon from '@mui/icons-material/Redo';


export const InteractiveInput = ({incomingText = '', onClick, setEditMode}) => {
    const [task, setTask] = useState(incomingText)

    return (
        <Paper
            component="form"
            sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%'}}
        >
            <TextField
                sx={{width: '100%'}}
                id="outlined-search"
                label={`${setEditMode ? 'Edit' : 'Create'} task`}
                value={task}
                onChange={(event) => setTask(event.target.value)}
                type="search"
            />
            {setEditMode && (
                <IconButton
                    color="primary"
                    sx={{p: '10px'}}
                    onClick={() => {
                        setEditMode(false)
                        setTask('')
                    }}
                    aria-label="close"
                >
                    <RedoIcon/>
                </IconButton>
            )}
            <IconButton
                color="primary"
                sx={{p: '10px'}}
                onClick={() => {
                    if (!task.length) return
                    onClick(task)
                    setTask('')
                }}
                aria-label="Save"
            >
                <AddIcon/>
            </IconButton>
        </Paper>
    );
}


