import * as React from 'react';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import RedoIcon from '@mui/icons-material/Redo';
import DoneIcon from '@mui/icons-material/Done';

type InteractiveInputProps = {
    incomingText?: string,
    onClick: (text: string) => void,
    editMode?: boolean
    setEditMode?: (arg: boolean) => void
}
export const InteractiveInput = ({incomingText, onClick, setEditMode}: InteractiveInputProps) => {
    const [fieldValue, setFieldValue] = useState<string>(incomingText || '')

    return (
        <Paper
            component="form"
            sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%'}}
        >
            <TextField
                sx={{width: '100%'}}
                id="outlined-search"
                label={`${setEditMode ? 'Edit' : 'Create'} task`}
                value={fieldValue}
                onChange={(event) => setFieldValue(event.target.value)}
                type="search"
            />
            {setEditMode && (
                <IconButton
                    color="primary"
                    sx={{p: '10px'}}
                    onClick={() => {
                        setEditMode
                            ? setEditMode(false)
                            : setFieldValue('')
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
                    if (!fieldValue.length) return
                    onClick(fieldValue)
                    setFieldValue('')
                }}
                aria-label="Save"
            >
                {setEditMode ? <DoneIcon/> : <AddIcon/>}
            </IconButton>
        </Paper>
    );
}


