
import MenuItem from "./MenuItem";
import { menu } from "./menu";

function Navigation() {
  return menu.map((item, key) => <MenuItem key={key} item={item} />);
}

export default Navigation;
