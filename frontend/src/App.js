import React from 'react';
import Heading from "./components/heading";
import Loginpage from "./components/login/loginpage";
import Mainpage from "./components/main/mainpage";

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
