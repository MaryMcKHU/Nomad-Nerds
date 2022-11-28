import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import MainPage from "./Components/MainPage";
import { useToken } from "./users/Auth";
import Footer from "./Components/Footer";
import Login from "./users/Login";
import Signup from "./users/SignupForm";
import Favorites from "./Components/Favorites";
import Logout from "./users/Logout";
import { AuthProvider } from "./users/Auth";
import CityList from "./searchByCategory/CityList";
import CategoryList from "./searchByCity/categoryList";
// import EventList from "./searchByCity/EventList";

function App() {
  const [token, login, logout, signup, user] = useToken();
  const [userName, setUserName] = useState("");

  if (user && !userName) {
    setUserName(user.username);
  }

  return (
    <AuthProvider>
      <Nav token={token} username={userName} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="user">
          <Route
            path="signup"
            element={
              <Signup token={token} signup={signup} setUserName={setUserName} />
            }
          />
          <Route
            path="login"
            element={
              <Login token={token} login={login} setUserName={setUserName} />
            }
          />
          <Route path="logout" element={<Logout logout={logout} />} />
          <Route path="favorites" element={<Favorites token={token} />} />
        </Route>
        <Route path="category" element={<CityList token={token} />} />
        <Route path="city" element={<CategoryList token={token} />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}
export default App;
