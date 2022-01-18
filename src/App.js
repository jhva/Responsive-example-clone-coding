import Home from './components/Home';
import Navbar from './components/Navbar';
import BuySell from './components/BuySell';
import Blog from './components/Blog';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Home />
      <BuySell />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
