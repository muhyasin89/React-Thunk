import DropdownMenu from "./DropdownMenu";
import { useState } from "react";
import { MenuList, MenuItem, Box, MenuDivider } from "@chakra-ui/react";
import { CSSTransition } from "react-transition-group";

function TeknikMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height + 20);
  }
  return (
    <DropdownMenu title="Teknik">
      <MenuList style={{ height: menuHeight }} className="dropdown">
        <CSSTransition
          in={activeMenu === "main"}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
          onEnter={calcHeight}
        >
          <div className="main-menu">
          
            <MenuItem>
              RAB
              <Box pos="absolute" ml="80%"></Box>
            </MenuItem>

         
            <MenuItem>
              Satuan Barang
              <Box pos="absolute" ml="80%"></Box>
            </MenuItem>
          </div>
        </CSSTransition>

        
      </MenuList>
    </DropdownMenu>
  );
}

export default TeknikMenu;