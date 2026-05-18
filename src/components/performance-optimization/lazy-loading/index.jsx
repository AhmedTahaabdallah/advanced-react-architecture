import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Suspense, lazy } from "react";
import LazyLoader from "./lazy-loader";

const Home = lazy(() => import("./home"));
const About = lazy(() => import("./about"));
const Contact = lazy(() => import("./contact"));

const AppContainer = styled.div`
  margin: 0 auto;
  max-width: 6xl;
  text-align: center;
  margin-top: 8rem;
`;

const Heading = styled.h1`
  font-weight: 600;
  font-size: 2xl;
`;

const NavContainer = styled.div`
  margin-top: 8rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`;

function AppLazyLoading() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Heading>Advanced React</Heading>
        <NavContainer>
          <Nav >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </Nav>
        </NavContainer>
        <Suspense fallback={<LazyLoader show delay={500} />}>
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </AppContainer>
    </BrowserRouter>
  );
}

export default AppLazyLoading;
