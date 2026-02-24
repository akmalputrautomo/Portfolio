import { BrowserRouter, Route, Routes } from "react-router-dom";
import PortfolioWebsite from "../pages/PortfolioWebsite";

export const RouterlList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioWebsite />} />
      </Routes>
    </BrowserRouter>
  );
};
