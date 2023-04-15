//your JS code here. If required.
 // get browser name and version
   const browserInfo = document.getElementById("browser-info");

// get browser name
const browserName = navigator.userAgent.split(" ")[0];
browserInfo.innerText = "You are using " + browserName;

// get browser version
const version = navigator.userAgent.split("/")[1];
browserInfo.innerText += " version " + version;
