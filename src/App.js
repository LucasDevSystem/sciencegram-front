import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import NavBar from "./components/navBar/index";
import StoriesPage from "./pages/stories/index";
import ProfilePage from "./pages/profile";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <NavBar />
              <HomePage />
            </div>
          }
        />

        <Route
          path="/stories/:userName"
          element={<StoriesPage></StoriesPage>}
        />
        <Route
          path="/profile/:userName"
          element={
            <div>
              <NavBar />
              <ProfilePage />
            </div>
          }
        />

        <Route path="*" element={<NavBar />} />
      </Routes>
    </Router>
  );
}
