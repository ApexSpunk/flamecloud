import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <Box>
      <Navbar />
      <Main />
      <Features />
      <Pricing />
      <Testimonials />
    </Box>
  );
}

export default App;
