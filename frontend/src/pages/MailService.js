import { Paper, Typography, Box, Divider } from '@mui/material';
import useStyle from '../styles/useStyle';
import MarkDown from '../components/MarkDown'

const MailServicePaperSX = {
	width: '70rem',
  maxWidth: '85vw',
	display: 'flex',
	flexDirection: 'column',
  gap: '1rem',
  marginTop: '3rem',
};

const MailService = (props) => {
  const { RowFlex } = useStyle();
	return (
    <Box sx={{ minHeight: '92vh', ...RowFlex, justifyContent: 'center'}}>
      <Paper sx={MailServicePaperSX} elevation={0}>
        <Typography variant='h4' textAlign='center' fontWeight='bold'>
          系學會信箱服務
        </Typography>
        <Typography variant='h5' textAlign='start' fontWeight='bold'>
          歷史
        </Typography>
        <Divider />
        <MarkDown>
          {
          `
            系學會資訊部於 2015 年初申請了 Google Apps Education 服務

            提供大家 @ntu.im 的 Gmail 信箱以及無限容量的 Google Drive 雲端硬碟

            並且可以用來登入各項 Google 服務

            只要是系上的夥伴都可以申請喔 🙂

            請到 https://mail.ntu.im/ 按下「新申請」並填寫相關資料即可
            申請後數分鐘即可在學校信箱收到登入指示

            除了 Google 雲端服務，@ntu.im 帳號還可以用來登入 Slack 唷 (Slack 簡介)
            如果有 Google Apps 使用上的問題，也歡迎在 Slack 的 #googleapps 頻道詢問

            註：
            Google Apps Education 是免費的
            但 ntu.im 的網域一年需要 12.99 美元費用維持
            如有意贊助請洽 contact@ntu.im
          `
          }
        </MarkDown>
      </Paper>
		</Box>
  );
}

export default MailService;
