//your JS code here. If required.
 // get browser name and version
    let browserName = '';
    let version = '';
    if (navigator.userAgent.indexOf("Firefox") !== -1) {
      browserName = 'Mozilla Firefox';
      version = navigator.userAgent.split('Firefox/')[1];
    } else if (navigator.userAgent.indexOf("Chrome") !== -1) {
      browserName = 'Google Chrome';
      version = navigator.userAgent.split('Chrome/')[1];
    } else if (navigator.userAgent.indexOf("Opera") !== -1) {
      browserName = 'Opera';
      version = navigator.userAgent.split('OPR/')[1];
    } else if (navigator.userAgent.indexOf("Safari") !== -1) {
      browserName = 'Safari';
      version = navigator.userAgent.split('Version/')[1].split(' ')[0];
    } else if (navigator.userAgent.indexOf("MSIE") !== -1 || navigator.userAgent.indexOf("Trident") !== -1) {
      browserName = 'Microsoft Internet Explorer';
      version = navigator.userAgent.split('MSIE')[1].split(';')[0];
    }

    // display browser info
    let browserInfo = document.getElementById('browser-info');
    browserInfo.innerText = 'You are using ' + browserName + ' version ' + version;
  </script>