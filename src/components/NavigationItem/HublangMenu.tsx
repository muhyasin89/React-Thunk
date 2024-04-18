import DropdownMenu from "./DropdownMenu";
import { useState } from "react";
import { MenuList, MenuItem, Box, MenuDivider } from "@chakra-ui/react";
import { CSSTransition } from "react-transition-group";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function HublangMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height + 20);
  }
  return (
    <DropdownMenu title="Hublang">
      <MenuList style={{ height: menuHeight }} className="dropdown">
        <CSSTransition
          in={activeMenu === "main"}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
          onEnter={calcHeight}
        >
          <div className="main-menu">
            <MenuItem onClick={() => setActiveMenu("pasang_baru")}>
              Pasang Baru
              <Box pos="absolute" ml="80%">
                <MdChevronRight />
              </Box>
            </MenuItem>
            <MenuItem onClick={() => setActiveMenu("penutupan_sr")}>
              Penutupan SR
              <Box pos="absolute" ml="80%">
                <MdChevronRight />
              </Box>
            </MenuItem>
            <MenuItem>
              Ganti WM
              <Box pos="absolute" ml="80%"></Box>
            </MenuItem>

            <MenuItem onClick={() => setActiveMenu("pengaduan_pelanggan")}>
              Pengaduan Pelanggan
              <Box pos="absolute" ml="80%">
                <MdChevronRight />
              </Box>
            </MenuItem>
            <MenuItem>
              Pembatalan Layanan
              <Box pos="absolute" ml="80%"></Box>
            </MenuItem>
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === "pasang_baru"}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}
        >
          <div className="menu-container">
            <MenuItem onClick={() => setActiveMenu("main")}>
              Go back
              <Box pos="absolute" ml="80%">
                <MdChevronLeft />
              </Box>
            </MenuItem>
            <MenuDivider />
            <MenuItem>
              <p>SPL</p>
            </MenuItem>
            <MenuItem>
              <p>BPPI</p>
            </MenuItem>
            <MenuItem>
              <p>SPKP</p>
            </MenuItem>
            <MenuItem>
              <p>REALISASI PB</p>
            </MenuItem>
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === "penutupan_sr"}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}
        >
          <div className="menu-container">
            <MenuItem onClick={() => setActiveMenu("main")}>
              Go back
              <Box pos="absolute" ml="80%">
                <MdChevronLeft />
              </Box>
            </MenuItem>
            <MenuDivider />
            <MenuItem>
              <p>PERMINTAAN</p>
            </MenuItem>
            <MenuItem>
              <p>BA PENUTUPAN SR</p>
            </MenuItem>
            <MenuItem>
              <p>REALISASI</p>
            </MenuItem>
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === "pengaduan_pelanggan"}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}
        >
          <div className="menu-container">
            <MenuItem onClick={() => setActiveMenu("main")}>
              Go back
              <Box pos="absolute" ml="80%">
                <MdChevronLeft />
              </Box>
            </MenuItem>
            <MenuDivider />
            <MenuItem>
              <p>PERMINTAAN</p>
            </MenuItem>

            <MenuItem>
              <p>REALISASI</p>
            </MenuItem>
          </div>
        </CSSTransition>
      </MenuList>
    </DropdownMenu>
  );
}

export default HublangMenu;
