
function loadDoc() {
  var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
  };
  xhr.open("GET", "http://localhost:3013/rest/volunteer/", true);
  xhr.send();
}

loadDoc();
