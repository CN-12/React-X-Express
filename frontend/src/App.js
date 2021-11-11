import { Route, Routes, Switch } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Page404 from "./components/Page404";

function App() {
  return (
    <div>
      <Switch>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" component={<Page404 />} />
        </Routes>
      </Switch>
    </div>
  );
}

export default App;
