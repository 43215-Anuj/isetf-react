import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Layout from "../hoc/Layout";
import Home from "./Home/Home";
import About from "./About/About";
import Services from "./Services/Services";
//Team
import Founders from "./Team/Founder/Founder";
import Exe from "./Team/Executive/Executives";
import Advisory from "./Team/Advisory/Members";
import VolunteersName from "./Volunteers/List/Volunteers";
import Events from "./EventsPic/Events";
import LifeMembers from "./Members/Life/Life";
import AssociateMembers from "./Members/Associate/Associate";

import Drawing from "./OurEvents/Drawing";
import Collab from "./Collab/Collaborators";
import MediaFeatured from "./Media/Media";
import Donate from "./Donate/Donate";
import Research from "./Newsletter/Research";
import JoinVolunteer from "../components/JoinMember/JoinVolunteer";
import JoinMember from "../components/JoinMember/JoinMember";
import Refund from "../pages/Privacy/Refund";
import Privacy from "../pages/Privacy/Privacy";
import TnC from "../pages/Privacy/TnC";

import jsonData from "../data/data.json";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";

function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <ExpandLessIcon
            className="scroll-top-btn"
            onClick={scrollToTop}
            style={{ display: visible ? "inline" : "none" }}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            
            <Route
              path="/team/founder"
              render={() => <Founders data={jsonData.Founders} />}
            />
            <Route
              path="/team/executives"
              render={() => <Exe data={jsonData.Executives} />}
            />
            <Route
              path="/team/advisory"
              render={() => <Advisory data={jsonData.Advisory} />}
            />

            <Route
              path="/volunteers"
              render={() => (
                <VolunteersName
                  Volunteers={jsonData.Volunteers}
                  WebVolunteers={jsonData.WebVolunteers}
                />
              )}
            />
            <Route path="/field_events" component={Events} />
            <Route path="/events/covid_drawing" component={Drawing} />
            <Route path="/media_featured" component={MediaFeatured} />
            <Route path="/members/associate" component={AssociateMembers} />
            <Route path="/newsletter/research_activity" component={Research} />
            <Route path="/collaborators" component={Collab} />
            <Route path="/member_form" component={JoinMember} />
            <Route path="/volunteer_form" component={JoinVolunteer} />
            <Route path="/privacy_policy" component={Privacy} />
            <Route path="/refund_policy" component={Refund} />
            <Route path="/tnc" component={TnC} />

            <Route path="/donate" component={Donate} />
            <Route path="/members/life" component={LifeMembers} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
