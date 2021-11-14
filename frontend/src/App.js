import { Outlet, Link } from "react-router-dom";
import "./css/style.css";
export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> | <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link> | <Link to="/123">404</Link>
      </nav>
      <Outlet />
    </div>
  );
}
