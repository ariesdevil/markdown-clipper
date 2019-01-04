function notifyExtension() {
    //var serializer = new XMLSerializer();
    //var content = serializer.serializeToString(document);
    var content = document.documentElement.outerHTML;
    browser.runtime.sendMessage({"dom": content});
  }
  notifyExtension();