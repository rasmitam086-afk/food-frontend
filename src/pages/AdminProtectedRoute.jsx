import { Navigate, Outlet } from "react-router-dom";

const AdminProtectedRoute = () => {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  if (!user || user.role !== "admin") {
    return <Navigate to="/login" />;
  }

  return <Outlet/>;
};

export default AdminProtectedRoute;