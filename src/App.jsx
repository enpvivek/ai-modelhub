import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import TopModel from "./assets/components/TopModel";
import Hero from "./assets/pages/Hero";
import Models from "./assets/pages/Models";
import Login from "./assets/pages/Login";
import Contact from "./assets/pages/Contact";
import ModelPage from "./assets/pages/ModelPage";
import About from "./assets/pages/About";

export default function App() {
  return (
    <div className="w-full h-auto flex flex-col">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <TopModel />
              <Footer />
            </>
          }
        />
        <Route
          path="/Models"
          element={
            <>
              <Header />
              <Models />
              <Footer />
            </>
          }
        />
        <Route
          path="/model/:id"
          element={
            <>
              <Header />
              <ModelPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/Contact"
          element={
            <>
              <Header />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/About"
          element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          }
        />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}
