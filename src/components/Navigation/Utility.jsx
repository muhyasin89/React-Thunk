import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme } from "@mui/material/styles";

export const drawerWidth = 240;

export const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open
  }>(({  open }) => ({
    flexGrow: 1,
    padding: useTheme().spacing(3),
    transition: useTheme().transitions.create('margin', {
      easing: useTheme().transitions.easing.sharp,
      duration: useTheme().transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: useTheme().transitions.create('margin', {
        easing: useTheme().transitions.easing.easeOut,
        duration: useTheme().transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }));
  

  
  export  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ open }) => ({
    transition: useTheme().transitions.create(['margin', 'width'], {
      easing: useTheme().transitions.easing.sharp,
      duration: useTheme().transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: useTheme().transitions.create(['margin', 'width'], {
        easing: useTheme().transitions.easing.easeOut,
        duration: useTheme().transitions.duration.enteringScreen,
      }),
    }),
  }));
  
  export const DrawerHeader = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    padding: useTheme().spacing(0, 1),
    // necessary for content to be below app bar
    ...useTheme().mixins.toolbar,
    justifyContent: 'flex-end',
  }));