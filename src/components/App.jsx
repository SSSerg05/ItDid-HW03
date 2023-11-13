import { lazy } from "react";
import { Routes, Route, } from "react-router-dom";

import Layout from "./Layout";
import CategoryDescription from "./CategoryDescription/CategoryDescription";

const HomePage = lazy(() => import('../pages/Home/Home'));
const AboutPage = lazy(() => import('../pages/About/About'));
const CategoryPage = lazy(() => import('../pages/Category/Category'));
const ErrorPage = lazy(() => import('../pages/Error/Error'));

const nav = [
  {url: '/', text: "Главная"},
  {url: '/about', text: "О сайте"},
  {url: '/category', text: "Категория"},
];

const categoryes = [
  {url: 'notebook', text: 'Ноутбуки'},
  {url: 'monitor', text: 'Мониторы'},
  {url: 'cellphone', text: 'Мобильные телефоны'},
];

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Layout navigation={nav}/>}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/category" element={<CategoryPage cat={categoryes}/>} />
          <Route path="/category/:categoryName" element={<CategoryDescription />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};
