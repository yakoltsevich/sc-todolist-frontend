import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import {InteractiveListItem} from "./InteractiveListItem";


export const InteractiveList = ({list, onClickSaveEdit, onClickDelete}) => {
    return (
        <Box sx={{flexGrow: 1}}>
            <Grid item xs={12} md={6}>
                <List sx={{width: 'inherit'}}>
                    {list.map((el) =>
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



