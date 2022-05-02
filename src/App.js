import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllProducts from './Pages/AllProducts/AllProducts';
import Home from './Pages/HomeComponents/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
