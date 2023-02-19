import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  redirect,
  Route,
  Routes,
} from "react-router-dom";
import store from "../../store/Store";
import HomePage from "../../pages/HomePage";
import NewsPage from "../../pages/NewsPage";
import Login from "../login/Login";
import "./App.scss";

import { Provider } from "react-redux";
import ProfilePage from "../../pages/ProfilePage";
import Header from "../header/Header";

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<span>Loading...</span>}>
        <Router>
          <div className="app">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/news" element={<NewsPage />} />
                {JSON.parse(localStorage.getItem("auth")!) ? (
                  <Route path="/profile" element={<ProfilePage />} />
                ) : (
                  <Route path="/auth" element={<Login />} />
                )}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </div>
        </Router>
      </Suspense>
    </Provider>
  );
}

export default App;
