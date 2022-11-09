import { Tooltip, Button, Typography, Modal, AppBar, Toolbar, Drawer, Box, List, ListItem, ListItemButton, IconButton, ListItemText, ListItemIcon } from '@mui/material';
import { useEffect, useState } from 'react';
import Login from './Login';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import useTheme from '../themes/useTheme';
import useStyle from '../styles/useStyle';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import MailIcon from '@mui/icons-material/Mail';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';

const LoginModalSX = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};

const AppNameSX = {
	flexGrow: 1,
	fontFamily: 'Space Mono, monospace',
  color: 'black',
  fontWeight: 'bold'
};

const Nav = (props) => {
  const { primary, secondary, nav, login } = useTheme();
  const { FatSidePadding, YellowButtonContained } = useStyle();
  const [drawerOpen, setDrawerOpen] = useState(false);
	const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const DrawerIcon = {
    首頁: <HomeRoundedIcon />,
    師資陣容: <SchoolRoundedIcon />,
    信箱服務: <MailIcon />,
  };

  const DrawerLink = {
    首頁: '/',
    師資陣容: '/professors',
    信箱服務: '/mail-service',
  };

	const list = (
    <Box
      sx={{ width: '20rem' }}
      role='presentation'
      onClick={() => {setDrawerOpen(false)}}
      onKeyDown={() => {setDrawerOpen(false)}}
    >
      <List>
        {['首頁', '師資陣容', '信箱服務'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href={DrawerLink[text]}>
              <ListItemIcon>
                {DrawerIcon[text]}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
		</Box>
  );

  return (
    <>
      <AppBar
        position='fixed'
        sx={{ backgroundColor: nav }}
        elevation={2}
      >
        <Toolbar sx={{height: '8vh'}}>
          <Tooltip title="選單">
            <IconButton onClick={() => { setDrawerOpen(true) }}>
              <MenuOutlinedIcon fontSize='medium' sx={{ color: secondary, borderRadius: '5px'}} />
            </IconButton>
          </Tooltip>
          <Typography variant="h6" component="div" sx={AppNameSX}>
             台大資管系學會
          </Typography>
          <Tooltip title="登入解鎖部分功能">
            <Button
              sx={{...FatSidePadding, ...YellowButtonContained}}
              color='warning'
              onClick={handleOpen}
              size='large'
              endIcon={<ChevronRightRoundedIcon />}
              >
              學生登入 
            </Button>
          </Tooltip>
        </Toolbar>
      </AppBar>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='登入註冊'
        aria-describedby='登入及註冊介面'
        sx={LoginModalSX}
      >
        <Login />
      </Modal>
      <Drawer
        anchor='left'
        open={drawerOpen}
        onClose={() => { setDrawerOpen(false); }}
      >
        {list}
      </Drawer>
    </>
  );
}

export default Nav;