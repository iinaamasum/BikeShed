import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllProducts from './Pages/AllProducts/AllProducts';
import LogIn from './Pages/Auth/LogIn/LogIn';
import RequireAuth from './Pages/Auth/RequireAuth/RequireAuth';
import SignUp from './Pages/Auth/SignUp/SignUp';
import Error404 from './Pages/Error404/Error404';
import Home from './Pages/HomeComponents/Home/Home';
import AddItems from './Pages/LoggedUser/AddItems/AddItems';
import AllItems from './Pages/LoggedUser/AllItems/AllItems';
import ManageItems from './Pages/LoggedUser/ManageItems/ManageItems';
import ProductUpdate from './Pages/ProductUpdate/ProductUpdate';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/productUpdate/:productId"
          element={
            <RequireAuth>
              <ProductUpdate />
            </RequireAuth>
          }
        />
        <Route
          path="/add-items"
          element={
            <RequireAuth>
              <AddItems />
            </RequireAuth>
          }
        />
        <Route
          path="/manage-items"
          element={
            <RequireAuth>
              <ManageItems />
            </RequireAuth>
          }
        />
        <Route
          path="/my-items"
          element={
            <RequireAuth>
              <AllItems />
            </RequireAuth>
          }
        />

        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
