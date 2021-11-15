import { Outlet } from "react-router-dom";
import "./css/style.css";
// import MainLogo from "./image/Logo.png";
import { Navbar, Container, Nav } from "react-bootstrap";
export default function App() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home" id="Logo_Main">
            Pastel <span id="star">*</span> Palletes
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="introduce">스토리 소개</Nav.Link>
            <Nav.Link href="expenses">멤버 소개</Nav.Link>
            <Nav.Link href="deck">속성별 완덱</Nav.Link>
            <Nav.Link href="illust">인기 일러스트 모음</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Outlet />

      <script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossorigin
      ></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossorigin
      ></script>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin
      ></script>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
    </div>
  );
}
