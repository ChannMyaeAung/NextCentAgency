import { Suspense, lazy, useState } from "react";
import "./App.css";

const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const Services = lazy(() => import("./components/Services"));
function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Navbar />
      <Hero />
      <Services />
    </Suspense>
  );
}

export default App;
