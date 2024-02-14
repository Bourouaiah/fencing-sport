import React, { useState, createContext } from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "tailwindcss/tailwind.css";
import "./index.css";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import CompetitionDetail from "./pages/competitions/CompetitionDetail";
import NewsDetail from "./pages/news/NewsDetail";
import NotFound from "./components/notfound/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="competitions/:id" element={<CompetitionDetail />} />
      <Route path="news/:id" element={<NewsDetail />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export const AppContext = createContext();

function App() {
  const [isArabic, setIsArabic] = useState(true);
  return (
    <AppContext.Provider value={{ isArabic, setIsArabic }}>
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
    </AppContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
