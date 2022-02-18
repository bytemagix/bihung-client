import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomeSection from "./Home/Home";
import Collection from "./Collection/Collection";
import Category from "./Category/Category";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/common-words/:category" element={<Category />} />
        <Route path="*" element={<main style={{ padding: "1rem" }}></main>} />
      </Routes>
    </Router>
  );
}
