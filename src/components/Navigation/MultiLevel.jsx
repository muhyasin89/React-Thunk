import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Collapse } from '@mui/material';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {useNavigation} from "../../state/navigation";
import MenuItem from "./MenuItem";
import {iconGenerator} from "./icons"

function MultiLevel({ item }) {
    const { items: children } = item;
    const open = useNavigation((state) =>  state.open)
    
    const handleClick =useNavigation((state) =>  state.handleDrawer)
  
    return (
      <React.Fragment>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>{item.icon ? iconGenerator(item?.icon) : "" }</ListItemIcon>
          <ListItemText primary={item.title} />
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map((child, key) => (
              <MenuItem key={key} item={child} />
            ))}
          </List>
        </Collapse>
      </React.Fragment>
    );
}

export default MultiLevel

