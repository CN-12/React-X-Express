import { Outlet } from "react-router-dom";
import "./css/style.css";
// import MainLogo from "./image/Logo.png";
import { Navbar, Container, Nav } from "react-bootstrap";
export default function App() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/" id="Logo_Main">
            Pastel <span id="star">*</span> Palletes
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="story">스토리 소개</Nav.Link>
            <Nav.Link href="member">멤버 소개</Nav.Link>
            <Nav.Link href="deck">속성별 완덱</Nav.Link>
            <Nav.Link href="illust">인기 일러스트 모음</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="btn"></div>

      <Outlet />
      <div></div>
      <script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossOrigin="true"
      ></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossOrigin="true"
      ></script>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin="true"
      ></script>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
    </div>
  );
}
