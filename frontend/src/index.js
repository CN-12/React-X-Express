import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Main from "./routes/main";
import Story from "./routes/story";
import Member from "./routes/member";
import Deck from "./routes/deck";
import Illustration from "./routes/illustration";
import NotFound from "./routes/notFound";
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="*" element={<NotFound />} />
        <Route path="" element={<Main />} />
        <Route path="member" element={<Member />} />
        <Route path="story" element={<Story />} />
        <Route path="deck" element={<Deck />} />
        <Route path="illust" element={<Illustration />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
