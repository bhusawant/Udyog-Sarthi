import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
// import ApplyDoctor from "./pages/ApplyDoctor";
import Header from "./pages/Header";
import DashboardTemplate from "./pages/DashboardTemplate";
import Application from "./pages/Application";
// import Jobs from "./pages/Apply";
import Apply from "./pages/Apply";
import Difficulties from "./pages/Difficulties";
import Address from "./pages/Address";
function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <>
      <BrowserRouter>
        {loading ? (
          <Spinner />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                  <><Header /><DashboardTemplate /></>
              }
            />
            <Route
              path="/jobs"
              element={
                  <><Header /><Apply /><DashboardTemplate /></>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/application"
              element={
                <><Header /><Application /><DashboardTemplate /></>
                
              }
            />
            <Route
              path="/diff"
              element={
                  <><Header /><Difficulties /><DashboardTemplate /></>
              }
            />
            <Route
              path="/address"
              element={
                  <><Header /><Address /><DashboardTemplate /></>
              }
            />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;