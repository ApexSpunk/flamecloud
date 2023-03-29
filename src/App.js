import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Features from './components/Features';

function App() {
  return (
    <Box>
      <Navbar />
      <Main />
      <Features />
    </Box>
  );
}

export default App;
