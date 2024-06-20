// ==UserScript==
// @name         remove html notranslate
// @namespace    http://tampermonkey.net/
// @version      2024-06-20
// @description  删除html标签上的notranslate类和translate属性,解决crates.io不能翻译的问题
// @author       adtkcn
// @match        http://*/*
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // 获取页面上的所有元素
    var elements = document.getElementsByTagName('html');

    // 遍历所有元素
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        // 移除 class="notranslate"
        if (element.classList.contains('notranslate')) {
            element.classList.remove('notranslate');
        }

        // 移除 translate="no" 属性
        if (element.getAttribute('translate') === 'no') {
            element.removeAttribute('translate');
        }
    }
})();