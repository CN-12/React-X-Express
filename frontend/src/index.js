import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Main from "./routes/main";
import Member from "./routes/member";
import Deck from "./routes/deck";
import NotFound from "./routes/notFound";
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="*" element={<NotFound />} />
        <Route path="" element={<Main />} />
        <Route path="expenses" element={<Member />} />
        <Route path="deck" element={<Deck />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
