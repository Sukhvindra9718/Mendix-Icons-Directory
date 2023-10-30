import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css";

function IconList({ iconList }) {
  const [copyIconIndex, setCopyIconIndex] = React.useState(-1);
  const [copyIcon, setCopyIcon] = React.useState(false);
  const [searchIconList, setSearchIconList] = React.useState([]);
  React.useEffect(() => {
    if (copyIcon) {
      setTimeout(() => {
        console.log("1")
        setCopyIcon(false);
        clearTimeout();
      }, 1000);
    }
  }, [copyIcon]);

  const searchIcon = (e) => {
    const searchValue = e.target.value;
    const filteredIconList = iconList.filter((icon) => {
      return icon.iconName.toLowerCase().includes(searchValue.toLowerCase());
    });
    setSearchIconList(filteredIconList);
    console.log(filteredIconList);
  }
  React.useEffect(() => {
    setSearchIconList(iconList);
  }, [iconList]);
  return (
    <div className="container">
      <h1>Mendix Icon List</h1>
      <span>Click Icon Name to copy to clipboard</span>
      <div className="search-container">
        {/* Search box  */}
        <input type="text" placeholder="Search icon" onChange={(e) => searchIcon(e)}/>

      </div>
      <div className="icon-container">
        {searchIconList.length > 0 ? searchIconList.map((icon, index) => (
          <div className="icon" key={index}>
            <div className="icon-inner">
              <div className="icon-wrapper">
                <div className="icon-image">
                  <FontAwesomeIcon icon={icon.iconName} color="#183153" />
                </div>
                <div className="icon-name">
                  <p
                    onClick={() => {
                      setCopyIcon(true);
                      setCopyIconIndex(index);
                      navigator.clipboard.writeText(icon.iconName);
                    }}
                  >
                    {icon.iconName}
                  </p>
                  <span
                    className={`${copyIcon ? "copy-icon active" : "copy-icon"}`}
                    onClick={() => {
                      setCopyIcon(true);
                      setCopyIconIndex(index);
                      navigator.clipboard.writeText(icon.iconName);
                    }}
                  >
                    <FontAwesomeIcon icon="copy" color="#183153" />
                  </span>
                  {copyIconIndex === index && (
                    <span
                      className={`${
                        copyIcon ? "copy-message active" : "copy-message"
                      }`}
                    >
                      Copied!
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )): <p>No icon found</p>}
      </div>
    </div>
  );
}

export default IconList;
