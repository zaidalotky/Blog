/** @format */

import "bootstrap/dist/css/bootstrap.min.css";
import CardBlog from "./components/CardBlog";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="" />
      </Routes>
      <div className="bg-dark text-center py-2 shadow-lg">
        <h1 className="text-white">Welcome To ZM Blog</h1>
      </div>
      <div className="container">
        <div className="d-flex justify-content-between pt-5 mb-4">
          <h4>Blogs</h4>
          <a href="#" className="btn btn-dark">
            Create
          </a>
        </div>
        <div className="row">
          <CardBlog />
          <CardBlog />
          <CardBlog />
          <CardBlog />
          <CardBlog />
          <CardBlog />
          <CardBlog />
          <CardBlog />
        </div>
      </div>
    </>
  );
};

export default App;
