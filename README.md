# markdown-clipper

This is a Firefox and Google Chrome extension to clip websites and download them into a readable markdown file.

It uses the following two libraries:
- [Readability.js](https://github.com/mozilla/readability) by Mozilla in version from commit [977be42d1fb33781401001318813ab9fe4568647](https://github.com/mozilla/readability/commit/977be42d1fb33781401001318813ab9fe4568647#diff-06d8d22df421dacde90a2268083424ab). This library is also used for the Firefox Reader View and it simplifies the page so that only the important parts are clipped. (Licensed under Apache License Version 2.0)
- [Turndown](https://github.com/domchristie/turndown) by Dom Christie in version 5.0.1 is used to convert the simplified HTML (from Readability.js) into markdown. (Licensed under MIT License)

# Installation
The plugin will be available in the Firefox and Google Chrome Add-on store.

# Permissions
- Access tabs: used to access the website content when the icon in the browser bar is clicked.
- Manage Downloads: neccessary to be able to download the markdown file.

--- 
The icon was created using [Favicon.io ](https://favicon.io)