import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {useState} from "react";
import {InteractiveInput} from "./InteractiveInput";


export const InteractiveListItem = ({item, onClickSaveEdit, onClickDelete}) => {
    const [editMode, setEditMode] = useState(false)

    return (
        <div>
            {editMode
                ? (<InteractiveInput
                    incomingText={item.text}
                    onClick={(payload) => {
                        onClickSaveEdit({id: item._id, text: payload})
                        setEditMode(false)
                    }}
                    setEditMode={setEditMode}
                />)
                : (<ListItem
                    secondaryAction={
                        <>
                            <IconButton
                                edge="end"
                                aria-label="Edit"
                                onClick={() => {
                                    setEditMode(true)
                                }}
                            >
                                <EditIcon/>
                            </IconButton>
                            <IconButton
                                edge="end"
                                aria-label="Delete"
                                onClick={() => {
                                    onClickDelete(item._id)
                                }}
                            >
                                <DeleteIcon/>
                            </IconButton>
                        </>
                    }
                >
                    <ListItemText
                        primary={item.text}
                    />
                </ListItem>)}
        </div>
    )
}



