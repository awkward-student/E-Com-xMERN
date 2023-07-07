import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import NotFound from "./pages/NotFound";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ProtectedRoute from "./components/Routes/Protected";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateCategory from "./pages/admin/CreateCategory";
import CreateProduct from "./pages/admin/CreateProduct";
import ShowUsers from "./pages/admin/ShowUsers";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";

function App() {
  return (
    <>
      <ToastContainer position="bottom-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<NotFound />} />
        {/* // user  */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        {/* // admin  */}
        <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/users" element={<ShowUsers />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
