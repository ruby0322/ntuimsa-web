import { Paper } from '@mui/material';
import ReactMarkdown from 'react-markdown'


const MarkDown = ({ children }) => {
  return ( 
    <Paper elevation={0}> 
      <ReactMarkdown>
        {children}
      </ReactMarkdown>
    </Paper>
  );
}

export default MarkDown;