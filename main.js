// ==UserScript==
// @name         PCT Debug Ads
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Debug Ads locations and IDs in PCT platform news website.
// @author       Alessandro Stopapto
// @match https://www.atnews.it/"
// @match https://www.basilicata24.it/"
// @match https://www.bergamonews.it/"
// @match https://www.cesenanotizie.net/"
// @match https://www.ciaocomo.it/"
// @match https://www.cuneo24.it/"
// @match https://www.forlinotizie.net/"
// @match https://www.genova24.it/"
// @match https://www.ilcapoluogo.it/"
// @match https://www.ilfaroonline.it/"
// @match https://www.ilgiunco.net/"
// @match https://www.ivg.it/"
// @match https://www.piacenzasera.it/"
// @match https://www.positanonews.it/"
// @match https://www.primonumero.it/"
// @match https://www.ravennanotizie.it/"
// @match https://www.reggiosera.it/"
// @match https://www.rimininotizie.net/"
// @match https://www.riviera24.it/"
// @match https://www.romadailynews.it/"
// @match https://www.romagnanotizie.it/"
// @match https://www.sardegnareporter.it/"
// @match https://www.sportasti.it/"
// @match https://www.sportlegnano.it/"
// @match https://*.presscommtech.com/"
// @grant        none
// @noframes
// @downloadURL https://raw.githubusercontent.com/alexrah/userscript_pct_debug_ads/master/main.js
// @updateURL https://raw.githubusercontent.com/alexrah/userscript_pct_debug_ads/master/main.js
// ==/UserScript==

(function() {
    'use strict';

    class Debug_ads {

    constructor() {
        const ads_debug_toggler = document.createElement('button');
        ads_debug_toggler.innerText = 'TOGGLE ADS DEBUG';
        ads_debug_toggler.classList.add('ads-debug-toggler');
        ads_debug_toggler.style.position = 'fixed';
        ads_debug_toggler.style.top = '0';
        ads_debug_toggler.style.right = '0';
        ads_debug_toggler.style.zIndex = '9999999999';
        window.document.body.appendChild(ads_debug_toggler);
        const class_this = this;
        ads_debug_toggler.addEventListener('click',function (e) {
            let active = false;
            if(this.classList.contains('active')){
                this.classList.remove('active');
                active = false;
            } else {
                this.classList.add('active');
                active = true;
            }
            class_this.test_ads(active)
        });
    };

    test_ads(active) {
        const all_adunit = document.querySelectorAll('.edibanner, .adunit, .pct-banner');
        all_adunit.forEach(function (elem) {
            if (active) {
                let title = document.createElement('span');
                title.innerHTML = elem.id;
                title.classList.add('ads-debug');
                title.style.display = 'block';
                title.style.backgroundColor = 'red';
                title.style.color = 'white';
                title.style.fontWeight = 'bold';
                title.style.position = 'absolute';
                title.style.left = '0px';
                title.style.bottom = '0px';
                title.style.width = '100%';
                elem.style.position = 'relative';
                elem.style.fontSize = '20px';
                elem.appendChild(title);
            } else {
                let title = elem.querySelector('.ads-debug');
                title.parentNode.removeChild(title);
            }
        })

    }

}

if(window.test_ads === undefined) {
    window.test_ads = new Debug_ads();
}

})();
