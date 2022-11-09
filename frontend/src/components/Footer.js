import { Box, Typography, Tooltip } from '@mui/material';
import useStyle from '../styles/useStyle';
 
const FontSX = {
	fontFamily: 'Space Mono, monospace',
  color: '#5C5D60',
  textAlign: 'center'
};

const Footer = () => {
  const { RowFlex, CenterContainer } = useStyle();
  return (
    <Box sx={{ padding: '1rem', gap: '1rem', ...RowFlex}}>
      <Box
        sx={{ width: 64, height: 64 }}
        component='img'
        src='https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/304778337_530779928849541_5944345345395120458_n.png?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RNOsj60TfOQAX-JNcUv&_nc_ht=scontent-tpe1-1.xx&oh=00_AfCnh5xwPB--vRFn-86Tq_cHSmdMRpGUbH3cXUDADiV9zg&oe=636EDA65'
      />
      <Box sx={{ width: '80%', ...CenterContainer}}>
        <Typography variant='subtitle2' sx={FontSX}>
          Powered by {' '}
          <Tooltip title='React' placement='top'>
            <ion-icon name="logo-react" />
          </Tooltip>
          <br />
          Copyright © NTUIMSA 2022
        </Typography>
      </Box>
    </Box>
  );  
};

export default Footer;