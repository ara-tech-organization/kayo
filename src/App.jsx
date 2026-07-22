import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import PageLoader from "./components/ui/PageLoader";

/* Route-level code splitting — the home bundle stays small. */
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Curriculum = lazy(() => import("./pages/Curriculum"));
const Gallery = lazy(() => import("./pages/Gallery"));
const FamilyConnect = lazy(() => import("./pages/FamilyConnect"));
const Policies = lazy(() => import("./pages/Policies"));
const Franchise = lazy(() => import("./pages/Franchise"));
const Careers = lazy(() => import("./pages/Careers"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/family-connect" element={<FamilyConnect />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
