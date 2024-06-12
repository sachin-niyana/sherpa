import "./App.css";
import BackToTop from "./components/BackToTop";
import Basecamp from "./components/Basecamp";
import Footer from "./components/Footer";
import { VideoTutorial } from "./components/VideoTutorial";

function App() {
  return (
    <>
      <BackToTop />
      <Basecamp />
      <VideoTutorial />
      <Footer />
    </>
  );
}

export default App;
