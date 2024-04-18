import './styles.css';

import {
  Menu,
  MenuButton,
  Button,
} from '@chakra-ui/react';

import { MdChevronRight } from 'react-icons/md';


function DropdownMenu({title, children}) {

  return (
    <>
      <Menu className="dropdown" closeOnSelect={false}>
        <MenuButton as={Button} rightIcon={<MdChevronRight />}>
          {title}
        </MenuButton>
        { children }
      </Menu>
    </>
  );
}

export default DropdownMenu