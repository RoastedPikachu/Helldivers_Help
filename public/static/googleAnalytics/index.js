// Google Analytics counter
(function () {
  var script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-1VK6FRKG6W";

  var firstScript = document.getElementsByTagName("script")[0];
  firstScript.parentNode.insertBefore(script, firstScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }

  gtag("js", new Date());

  gtag("config", "G-1VK6FRKG6W");
})();
// Google Analytics counter
