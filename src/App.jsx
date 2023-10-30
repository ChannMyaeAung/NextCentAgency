import { Suspense, lazy, useState } from "react";
import "./App.css";

import Lottie from "lottie-react";
import loading from "./assets/Animations/Animation - 1698693915107.json";
const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const Services = lazy(() => import("./components/Services"));
const About = lazy(() => import("./components/About"));
const Products = lazy(() => import("./components/Products"));
const MarketingBlog = lazy(() => import("./components/MarketingBlog"));
const Demo = lazy(() => import("./components/Demo"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <Suspense fallback={<Lottie animationData={loading} />}>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Products />
      <MarketingBlog />
      <Demo />
      <Footer />
    </Suspense>
  );
}

export default App;
