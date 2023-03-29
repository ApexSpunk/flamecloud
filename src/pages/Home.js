
import { Box } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import '../App.css';

function Home() {
  return (
    <Box>
      <Navbar />
      <Main />
      <Features />
      <Pricing />
      <Testimonials />
      <Blog />
      <Footer />
    </Box>
  );
}

export default Home;
