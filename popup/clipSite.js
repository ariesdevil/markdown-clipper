browser.tabs.query({currentWindow: true, active: true})
    .then((tabs) => {
      console.log(tabs[0]);
      var id = tabs[0].id;
      var url = tabs[0].url;
      browser.tabs.executeScript(id, {
        file: "/contentScript/pageScrapper.js"
    }),then( () => {
        console.log("Successfully injected");
    }).catch( (error) => {
        console.error(error);
    });
})