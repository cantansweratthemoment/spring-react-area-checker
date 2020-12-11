import React from 'react';
import Heading from "./components/Heading";
import Loginpage from "./components/login/Loginpage";
import Mainpage from "./components/main/Mainpage";

function App() {
  return (<div className="firstPage" style={{
    backgroundImage: "url(images/wallpaper.JPEG)",//TODO Новогодние котики?
    backgroundSize: "45%",
    backgroundRepeat: "repeat"
  }}><Heading/><br/>
    <Loginpage/>
  </div>)
}

export default App;
//TODO отображение нужной страницы в зависимости от состояния