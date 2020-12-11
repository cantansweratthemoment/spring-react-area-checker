import React from 'react';
import Heading from "./components/Heading";
import Loginpage from "./components/login/Loginpage";
import Mainpage from "./components/main/Mainpage";

function App() {
  return (<div className="firstPage" style={{
    backgroundImage: "url(wallpaper.JPEG)",
    backgroundSize: "45%",
    backgroundRepeat: "repeat"
  }}><Heading/><br/>
    <Mainpage/>
  </div>)
}

export default App;
