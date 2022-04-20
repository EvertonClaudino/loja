import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/pages/Home';
import Lançamentos from './Components/pages/Lançamentos';
import Shop from './Components/pages/Shop';
import QuemSomos from './Components/pages/Quemsomos';
import Login from './Components/pages/Login';

import Navbar from './Components/layout/Navbar';
import Subnav from './Components/layout/Subnav';
import Footer from './Components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Subnav />
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/Lancamentos" element={<Lançamentos />}>
          </Route>
          <Route path="/Shop" element={<Shop />}>
          </Route>
          <Route path="/Quemsomos" element={<QuemSomos/>}>
          </Route>
          <Route path="/Login" element={<Login />}>
          </Route>
        </Routes>
      <Footer />
    </Router>

  )
}

export default App;
