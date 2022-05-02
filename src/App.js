import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllProducts from './Pages/AllProducts/AllProducts';
import LogIn from './Pages/Auth/LogIn/LogIn';
import SignUp from './Pages/Auth/SignUp/SignUp';
import Home from './Pages/HomeComponents/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
