// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Desktop_Checkout } from "./utils/Desktop_Checkout.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/checkout" element={<Desktop_Checkout />} />
    </Routes>
  </BrowserRouter>
);
