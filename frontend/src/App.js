import React from 'react';
import Heading from "./first_page_components/heading";
import Login from "./first_page_components/login";

function App() {
    return (<div className="firstPage" style={{
        backgroundImage: "url(wallpaper.JPEG)",
        backgroundSize: "45%",
        backgroundRepeat: "repeat"
    }}><Heading/><br/>
    <Login/>
    </div>)
}

export default App;
