import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import MainPage from "./MainPage";
import { useToken } from "./users/Auth";
import Footer from "./Footer";
import Login from "./users/Login";
import Signup from "./users/SignupForm";
import Favorites from "./Favorites";
import Logout from "./users/Logout";
import { AuthProvider } from "./users/Auth";
import CityList from "./searchByCategory/CityList";
import CategoryList from "./searchByCity/categoryList";

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
              <Signup token={token} signup={signup} setUN={setUserName} />
            }
          />
          <Route
            path="login"
            element={<Login token={token} login={login} setUN={setUserName} />}
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
