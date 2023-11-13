import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";

const HomePage = lazy(() => import('../pages/Home/Home'));
const AboutPage = lazy(() => import('../pages/About/About'));
const CategoryPage = lazy(() => import('../pages/Category/Category'));
const ErrorPage = lazy(() => import('../pages/Error/Error'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};
