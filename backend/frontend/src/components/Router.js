import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "/Users/mabee/Desktop/React-X-Express/frontend/src/App";
import Home from "./Home";
import About from "./About";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
