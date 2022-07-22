import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

// core components
import Footer from "../../components/footer/footer.jsx";

import { getVoices } from "../../services/voice";
// sections for this page
import { history } from "../../index";
import FeatureComponent from "./sections/featurecomponent.jsx";
import HeaderComponent from "./sections/headercomponent.jsx";
import TeamComponent from "./sections/teamcomponent.jsx";

const HomePage = () => {
  const [voices, setVoices] = useState([]);
  const [voicesFlag, setVoicesFlag] = useState(false);
  useEffect(() => {
    async function fetchVoices() {
      let voices = await getVoices();
      if (!voices.length) setVoicesFlag(false);
      setVoices(voices);
      setVoicesFlag(true);
    }
    fetchVoices();
  }, []);
  return (
    <div id="main-wrapper">
      <div className="page-wrapper">
        <div className="container-fluid">
          <HeaderComponent user={history.location.state.state} />
          <FeatureComponent voicesFlag={voicesFlag} voices={voices} />
          <TeamComponent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

HomePage.propTypes = {
  classes: PropTypes.object,
};

export default HomePage;
