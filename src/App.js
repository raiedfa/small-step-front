

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import MyStory from "./pages/MyStory";
import ScrollToTop from "./components/ScrollToTop";
import Sharing from "./pages/Sharing";
import Game from "./pages/Game";






function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <ScrollToTop /> 
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/story" element={<MyStory />} />
            <Route path="/sharing" element={<Sharing />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;

