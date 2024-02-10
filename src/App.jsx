import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import "./Styles/App.css";
import Hero from "./Components/Hero";
import Trusted from "./Components/Trusted";
import SocialMediaManagement from "./Components/SocialMediaManagement";
import StrugglingToMake from "./Components/StrugglingToMake";
import RiskingReputation from "./Components/RiskingReputation";
import TroubleGrowing from "./Components/TroubleGrowing";
import SocialGossiping from "./Components/SocialGossiping";
import RedefineBrand from "./Components/RedefineBrand";
import CreativeDesigns from "./Components/CreativeDesigns";
import WhatWeDo from "./Components/WhatWeDo";
import BestAgency from "./Components/BestAgency";
import MeetTheSquad from "./Components/MeetTheSquad";
import AllQuestions from "./Components/AllQuestions";
import SocialStrategy from "./Components/SocialStrategy";
import Footer from "./Components/Footer";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="container">
      <Header windowWidth={windowWidth} />
      <Hero windowWidth={windowWidth} />
      <Trusted windowWidth={windowWidth} />
      <SocialMediaManagement windowWidth={windowWidth} />
      <StrugglingToMake />
      <RiskingReputation windowWidth={windowWidth} />
      <TroubleGrowing windowWidth={windowWidth} />
      <SocialGossiping />
      <RedefineBrand windowWidth={windowWidth} />
      <CreativeDesigns windowWidth={windowWidth} />
      <WhatWeDo windowWidth={windowWidth} />
      <BestAgency windowWidth={windowWidth} />
      <MeetTheSquad windowWidth={windowWidth} />
      <AllQuestions windowWidth={windowWidth} />
      <SocialStrategy windowWidth={windowWidth} />
      <Footer windowWidth={windowWidth} />
    </div>
  );
}

export default App;
