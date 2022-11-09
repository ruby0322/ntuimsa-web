import Home from './pages/Home'
import Nav from './components/Nav';
import Footer from './components/Footer';
import Professors from './pages/Professors';
import MailService from './pages/MailService'
import { Divider, Paper, Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <Nav />
      <Box sx={{ minHeight: '92vh', marginTop: '8vh' }}>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='professors/*' element={<Professors />} />
          <Route path='mail-service/*' element={<MailService />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Box>
      <Divider />
      <Footer />
    </Router>
  );
}

export default App;
