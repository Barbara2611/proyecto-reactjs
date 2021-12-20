import React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider

} from "@mui/material";
import FiberNewIcon from '@mui/icons-material/FiberNew';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const list = () => {
    return (
        <div>
            <List component="nav">
                <ListItem button>
                   <ListItemIcon>
                       <FiberNewIcon />
                       <ListItemText sx={{
                           marginLeft: 2
                       }}>
                            Lanzamiento
                       </ListItemText>
                   </ListItemIcon>
                </ListItem>
                <ListItem button>
                   <ListItemIcon>
                       <LocalOfferIcon />
                       <ListItemText sx={{
                           marginLeft: 2
                       }}>
                            SALE
                       </ListItemText>
                   </ListItemIcon>
                </ListItem>
            </List>
            <Divider />
        </div>
    )
}

export default list
