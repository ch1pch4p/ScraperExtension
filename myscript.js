var markup = document.documentElement.innerHTML;
console.log(markup);
chrome.runtime.sendMessage({greeting: markup});


