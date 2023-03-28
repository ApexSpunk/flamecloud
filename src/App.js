import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  return (
    <Box>
      <Navbar />
      <Main />
    </Box>
  );
}

export default App;
