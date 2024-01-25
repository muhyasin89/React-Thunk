
import {ListItem, ListItemIcon, ListItemText} from '@mui/material';
import {isContainsIcon} from "./utils";
import { Link } from "react-router-dom";

function SingleLevel({ item }) {
  return (
    <Link to={item.to}>
      <ListItem button>
          <ListItemIcon>{() => isContainsIcon(item.icon)}</ListItemIcon>
          <ListItemText primary={item.title} />
      </ListItem>
    </Link>
  );
}

export default SingleLevel;
