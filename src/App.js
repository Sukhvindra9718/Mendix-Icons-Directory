import './App.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import IconList from "./components/IconList";

const iconList = Object.keys(Icons).filter(key => key !== "fas" && key !== "prefix").map(icon => Icons[icon]);
library.add(...iconList);


function App() {
  return (
    <div className="App">
      <IconList iconList={iconList}/>
    </div>
  );
}

export default App;
