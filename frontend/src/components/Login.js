import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import FacebookLogin from '@greatsumini/react-facebook-login';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FacebookIcon from '@mui/icons-material/Facebook';

const LoginPaperSX = {
  width: '24rem',
  maxWidth: '80%',
  height: '24rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  padding: '2rem'
};

const TextFieldProps = {
  required: true,
  disabled: true,
  fullWidth: true,
  size: 'small',
  variant: 'outlined',
  helperText: '尚未開放',
};

const Login = () => {

  const [tab, setTab] = useState('1');
  const [userProfile, setUserProfile] = useState();

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  useEffect(() => {
  }, []);

  const handleLogin = data => {
    setUserProfile(data);
  };

  return (
    <Paper elevation={3} sx={LoginPaperSX}>
      
      <Typography variant='h4'> 學生登入 </Typography>

      <TabContext value={tab}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
          <TabList onChange={handleChange}>
            <Tab label="Facebook 登入" value="1" />
            <Tab label="Google 登入" value="2" />
            <Tab label="立即註冊" value="3" />
          </TabList>
        </Box>

        <TabPanel value="1">
          <FacebookLogin
            appId={process.env.REACT_APP_FACEBOOK_APP_ID}
            autoLoad={true}
            onProfileSuccess={handleLogin}
            onFail={error => console.log('Login Failed!', error)}
            onSuccess={response => console.log('Login Success!', response)}
            render={({ onClick, _ }) => (
              <Button startIcon={<FacebookIcon size='small' />} onClick={onClick} variant='contained' color='primary' fullWidth> Facebook 登入</Button>
            )}
          ></FacebookLogin>
        </TabPanel>

        <TabPanel value="2">
          開發中，尚未開放。
        </TabPanel>

        <TabPanel value="3">
          <TextField id="email" label="電子郵件" {...TextFieldProps} />
          <TextField id="password" label="密碼" {...TextFieldProps} />
          <Button variant='contained' disabled color='secondary' fullWidth> 立即註冊 </Button>
        </TabPanel>
      </TabContext>
    </Paper>
  );
}

export default Login;
