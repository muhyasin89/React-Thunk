
import {ListItem, ListItemIcon, ListItemText} from '@mui/material';

import {iconGenerator} from "./icons"

function SingleLevel({ item }) {
  return (
    <ListItem button>
      <ListItemIcon>{item.icon ? iconGenerator(item?.icon): ""}</ListItemIcon>
      <ListItemText primary={item.title} />
    </ListItem>
  );
}

export default SingleLevel;
