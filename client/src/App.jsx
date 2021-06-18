import AboutUs from "./components/Sections/AboutUs";
import Event from "./components/Sections/Event";
import FeedBackSection from "./components/Sections/FeedBackSection";
import { GlobalStyle } from "./styles/global.js";
import InitialSection from "./components/Sections/InitialSection";
import Partnerships from "./components/Sections/Partnership";

function App() {

  return (

    <>
      <GlobalStyle/>
      <InitialSection/>
      <Event/>
      <AboutUs/>
      <FeedBackSection />
      <Partnerships/>
    </>
  );
}

export default App;
