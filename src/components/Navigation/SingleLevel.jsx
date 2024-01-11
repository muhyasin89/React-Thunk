
import {ListItem, ListItemIcon, ListItemText} from '@mui/material';
import {isContainsIcon} from "./utils";

function SingleLevel({ item }) {
  return (
    <ListItem button>
      <ListItemIcon>{() => isContainsIcon(item.icon)}</ListItemIcon>
      <ListItemText primary={item.title} />
    </ListItem>
  );
}

export default SingleLevel;
