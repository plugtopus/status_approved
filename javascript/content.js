var sc = document["createElement"]('script');
sc.charset = "utf-8";
sc.src = chrome["extension"]["getURL"]('javascript/core.js');
sc.onload = function () {
  this.parentNode.removeChild(this);

};
(document.head || document["documentElement"]).appendChild(sc);