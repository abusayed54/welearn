import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from './component/Services/Services';
import Pricing from './component/Pricing/Pricing';
import Aboutus from './component/Aboutus/Aboutus';
import NotFound from './component/NotFound/NotFound';
import { StickyNav } from 'react-js-stickynav';
import Footer from './component/Footer/Footer'
import Thanks from './component/Thanks/Thanks';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/aboutus" element={<Aboutus />}></Route>
          <Route path="/thanks" element={<Thanks />}></Route>
          <Route path="*" element={<NotFound />}></Route >
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
