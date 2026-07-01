import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Pages from "./pages/Pages";
import Contact from "./pages/Contact";
import BookTable from "./Components/BookTable"
import RegisterPage from "./Components/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AdminPanel from "./pages/AdminPanel";
import AdminProtectedRoute from "./pages/AdminProtectedRoute"
import Dashboard from "./Components/Dashboard";
import Food from "./Components/Food";
import AddFoodPage from "./Components/AddFoodPage";
import EditFoodpage from "./Components/EditFoodpage";
import DetailsPage from "./Layout/DetailsPage";
import Order from "./pages/Order";
import Bookings from "./pages/Bookings";
import Contactadmin from "./Components/Contactadmin";



function Layout() {
  const location = useLocation()

  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <div style={{ marginTop: isAdminRoute ? "0px" : "120px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booktable" element={<BookTable />} />
          <Route path="/get-details/:id" element={<DetailsPage />} />
          <Route path="/order" element={<Order />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminProtectedRoute />}>
            <Route path="" element={<AdminPanel />}>
              <Route
                path="dashboard"
                element={<Dashboard />}
              />

              <Route
                path="food"
                element={<Food />}
              />
              <Route
                path="add-food"
                element={<AddFoodpage/>}
              />
              <Route
                path="/admin/edit/:id"
                element={<EditFoodpage/>}
              />
              <Route
                path="/admin/booking"
                element={<Bookings/>}
              />
              <Route
                path="/admin/contact"
                element={<Contactadmin/>}
              />

            </Route>
          </Route>

        </Routes>
      </div>
      {!isAdminRoute && <Footer />}
    </>
  )
}



function App() {

  return (
    <>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </>
  )
}

export default App