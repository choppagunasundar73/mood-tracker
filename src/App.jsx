import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./RootLayout";
import Loading from "./Loading";

// Lazy-load your page components (with a simulated delay for testing)
const Home = lazy(() =>
  new Promise(resolve =>
    setTimeout(() => resolve(import("./Home")), 3500)
  )
);
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
const Dashboard = lazy(() => import("./Dashboard"));
const Insights = lazy(() => import("./Insights"));
const Journal = lazy(() => import("./Journal"));
const Resources = lazy(() => import("./Resources"));

function App() {
  return (
    <Router>
      <RootLayout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </Suspense>
      </RootLayout>
    </Router>
  );
}

export default App;
