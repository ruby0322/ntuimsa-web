import { Paper, Box } from '@mui/material';
import MarkDown from './MarkDown';

const Interview = ({ children }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper elevation={0} sx={{ width: '50rem', maxWidth: '90%', padding: '1.5rem' }}>
                <MarkDown>
                    { children }
                </MarkDown>
            </Paper>
        </Box>
    );
}

export default Interview;