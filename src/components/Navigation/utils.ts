import {iconGenerator} from "./icons"

export function hasChildren(item) {
    const { items: children } = item;
  
    if (children === undefined) {
      return false;
    }
  
    if (children.constructor !== Array) {
      return false;
    }
  
    if (children.length === 0) {
      return false;
    }
  
    return true;
  }
  
export const drawerWidth = 240;

export const isContainsIcon = (args) => {
  if(args != undefined ){
    return iconGenerator(args);
  }
  return "";
}