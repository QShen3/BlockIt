function saveOptions(e) {
    e.preventDefault();
    browser.storage.local.set({
      user: document.querySelector("#user").value
    });
  }
  
  function restoreOptions() {
  
    function setCurrentChoice(result) {
      document.querySelector("#user").value = result.user || "";
    }
  
    function onError(error) {
      console.log(`Error: ${error}`);
    }
  
    var getting = browser.storage.local.get("user");
    getting.then(setCurrentChoice, onError);
  }
  
  document.addEventListener("DOMContentLoaded", restoreOptions);
  document.querySelector("form").addEventListener("submit", saveOptions);