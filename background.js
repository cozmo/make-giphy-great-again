chrome.webRequest.onBeforeRequest.addListener(
  function(options) {
    console.log(options)
    if(/_s\.gif/i.test(options.url)){
      return {redirectUrl: options.url.replace(/_s\.gif/i,".gif") };
    }
  },{
    urls: ["*://*.giphy.com/media/*"]
  },
    ["blocking"]
);
