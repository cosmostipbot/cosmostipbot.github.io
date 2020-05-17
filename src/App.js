import React from "react";

import "./App.css";

import TopNavbar from "./components/TopNavbar";
import TopHeader from "./components/TopHeader";
import Footer from "./components/Footer";

import { BrowserRouter as Switch, Route } from "react-router-dom";

import AboutUs from "./pages/AboutUs";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import HowTo from "./pages/HowTo";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <TopHeader />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/faq" component={Faq} />
        <Route path="/howto" component={HowTo} />
        <Route path="/privacy" component={PrivacyPolicy} />
        <Route path="/terms" component={Terms} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
