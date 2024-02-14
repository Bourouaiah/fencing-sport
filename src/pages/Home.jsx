import React, { useContext } from "react";
import Landing from "../components/landing/Landing";
import ArabicLanding from "../components/landing/ArabicLanding";
import Competitions from "../components/competitions/Competitions";
import ArabicCompetitions from "../components/competitions/ArabicCompetitions";
import News from "../components/news/News";
import ArabicNews from "../components/news/ArabicNews";
import FencingStudent from "../components/fencing-for-students/FencingStudent";
import ArabicFencingStudent from "../components/fencing-for-students/ArabicFencingStudent";
import FindClub from "../components/club/FindClub";
import ArabicFindClub from "../components/club/ArabicFindClub";
import Team from "../components/team/Team";
import ArabicTeam from "../components/team/ArabicTeam";
import Partners from "../components/partners/Partners";
import ArabicPartners from "../components/partners/ArabicPartners";

import { AppContext } from "../main";

function Home() {
  const { isArabic } = useContext(AppContext);
  if (isArabic) {
    return (
      <div>
        <ArabicLanding />
        <ArabicCompetitions />
        <ArabicNews />
        <ArabicFencingStudent />
        <ArabicFindClub />
        <ArabicTeam />
        <ArabicPartners />
      </div>
    );
  } else {
    return (
      <div>
        <Landing />
        <Competitions />
        <News />
        <FencingStudent />
        <FindClub />
        <Team />
        <Partners />
      </div>
    );
  }
}

export default Home;
