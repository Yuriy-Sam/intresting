import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "../../store/Store";
import HomePage from "../../pages/HomePage";
import NewsPage from "../../pages/NewsPage";
import ResponsiveAppBar from "../header/HeaderTest";
import Login from "../login/Login";
import "./App.scss";

import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<span>Loading...</span>}>
        <Router>
          <div className="app">
            <ResponsiveAppBar />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/profile" element={<Login />} />
                {/* <Route path="*" element={<Page404 />} /> */}
              </Routes>
            </main>
          </div>
        </Router>
      </Suspense>
    </Provider>
  );
}

export default App;
