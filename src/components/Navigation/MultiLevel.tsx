import React, { useState } from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Collapse } from '@mui/material';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import MenuItem from "./MenuItem";
import {isContainsIcon} from "./utils";


function MultiLevel({ item }) {
    const { items: children } = item;
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen((prev) => !prev);
    };
  
    
  
    return (
      <React.Fragment>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>{() => isContainsIcon(item.icon) }</ListItemIcon>
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

