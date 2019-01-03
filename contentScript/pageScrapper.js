function notifyExtension() {
    var serializer = new XMLSerializer();
    var content = serializer.serializeToString(document);
    browser.runtime.sendMessage({"dom": content});
  }
  notifyExtension();