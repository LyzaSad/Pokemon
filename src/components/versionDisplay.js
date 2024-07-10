import React from "react";
import packageJson from "../../package.json";

const VersionDisplay = () => {
  return (
    <div className="version-display">
      Version: {packageJson.version}
    </div>
  );
};


export default VersionDisplay;
