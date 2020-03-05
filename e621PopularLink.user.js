// ==UserScript==
// @name Popular Post Script
// @description Add the Popular button back to the posts pane on e621
// @include https://e621.net*
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// ==/UserScript==

$("#subnav-favorites").append('<li id="subnav-popular"><a id="subnav-popular-link" href="/explore/posts/popular">Popular</a></li>');