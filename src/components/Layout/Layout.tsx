import { Suspense } from "react";
import Container from "../Container/Container";
import s from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div className={s.layout}>
      <Header />
      <main>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </div>
  );
};

export default Layout;
