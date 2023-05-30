import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import {InteractiveListItem} from "./InteractiveListItem";
import {ITask} from "../models/ITask";

type InteractiveListProps = {
    list: ITask[],
    onClickSaveEdit: ({id, text}: { id: string, text: string }) => void,
    onClickDelete: (id: string) => void,
}
export const InteractiveList = ({list, onClickSaveEdit, onClickDelete}: InteractiveListProps) => {
    return (
        <Box sx={{flexGrow: 1}}>
            <Grid item xs={12} md={6}>
                <List sx={{width: 'inherit'}}>
                    {list.map((el: ITask) =>
                        (<InteractiveListItem
                            key={el._id}
                            item={el}
                            onClickDelete={onClickDelete}
                            onClickSaveEdit={onClickSaveEdit}
                        />)
                    )}
                </List>
            </Grid>
        </Box>
    )
}



