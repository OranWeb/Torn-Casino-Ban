// ==UserScript==
// @name         TORN Casino Ban
// @version      1.0
// @description  Illegal script to ban yourself from the casino
// @author       OranWeb
// @match        https://www.torn.com/loader.php?sid=slots*
// @match        https://www.torn.com/loader.php?sid=roulette*
// @match        https://www.torn.com/loader.php?sid=highlow*
// @match        https://www.torn.com/loader.php?sid=keno*
// @match        https://www.torn.com/page.php?sid=bookie*
// @match        https://www.torn.com/loader.php?sid=lottery*
// @match        https://www.torn.com/loader.php?sid=blackjack*
// @match        https://www.torn.com/loader.php?sid=holdem*
// @match        https://www.torn.com/page.php?sid=russianRoulette*
// @match        https://www.torn.com/loader.php?sid=spinTheWheel*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.location.href = "https://www.torn.com/index.php";
})();
