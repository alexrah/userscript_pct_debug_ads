// ==UserScript==
// @name         PCT Debug Ads
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Debug Ads locations and IDs in PCT platform news website.
// @author       Alessandro Stopapto
// @match        *://*/*
// @grant        none
// @noframes
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
