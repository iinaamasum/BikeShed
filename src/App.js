import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddProduct from './Pages/AddProduct/AddProduct';
import AllProducts from './Pages/AllProducts/AllProducts';
import LogIn from './Pages/Auth/LogIn/LogIn';
import RequireAuth from './Pages/Auth/RequireAuth/RequireAuth';
import ResetPass from './Pages/Auth/ResetPass/ResetPass';
import SignUp from './Pages/Auth/SignUp/SignUp';
import VerifyEmail from './Pages/Auth/VerifyEmail/VerifyEmail';
import Error404 from './Pages/Error404/Error404';
import Home from './Pages/HomeComponents/Home/Home';
import AddItems from './Pages/LoggedUser/AddItems/AddItems';
import AllItems from './Pages/LoggedUser/AllItems/AllItems';
import ManageItems from './Pages/LoggedUser/ManageItems/ManageItems';
import UpdateUserItem from './Pages/LoggedUser/UpdateUserItem/UpdateUserItem';
import ProductUpdate from './Pages/ProductUpdate/ProductUpdate';
import Footer from './Pages/Shared/Footer/Footer';
import RouteToTop from './RouteToTop';

function App() {
  return (
    <>
      <RouteToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/resetPass" element={<ResetPass />} />
          <Route path="/verifyemail" element={<VerifyEmail />} />
          <Route
            path="/productUpdate/:productId"
            element={
              <RequireAuth>
                <ProductUpdate />
              </RequireAuth>
            }
          />

          <Route
            path="/item/:itemId"
            element={
              <RequireAuth>
                <UpdateUserItem />
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
            path="/addProduct"
            element={
              <RequireAuth>
                <AddProduct />
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
        <ToastContainer />
        <Toaster />
        <Footer />
      </RouteToTop>
    </>
  );
}

export default App;
