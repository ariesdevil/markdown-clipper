browser.runtime.onMessage.addListener(notify);

function createReadableVersion(dom) {
  var reader = new Readability(dom);
  var article = reader.parse();
  return article;
}

function convertArticleToMarkdown(article) {
  var turndownService = new TurndownService()
  var markdown = turndownService.turndown(article.content);
  
  //add article titel as header
  markdown = "# " + article.title + "\n" + markdown;
  return markdown;
}

function downloadMarkdown(markdown, article) {
  var blob = new Blob([markdown], {
    type: "text/markdown;charset=utf-8"
  });
  var url = URL.createObjectURL(blob);
  browser.downloads.download({
    url: url,
    filename: article.title + ".md",
    saveAs: true
  });
}

function notify(message) {

  var parser = new DOMParser();
  var dom = parser.parseFromString(message.dom, "application/xml");
  console.log(dom.documentElement.nodeName == "parsererror" ? "error while parsing" : dom.documentElement.nodeName);

  var article = createReadableVersion(dom);
  var markdown = convertArticleToMarkdown(article);
  downloadMarkdown(markdown, article);
}