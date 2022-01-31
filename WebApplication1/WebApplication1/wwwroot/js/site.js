// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
//console.log(window.performance.navigation.type);

$(document).ready(function () {
    /*
    window.addEventListener('pageshow', () => {
        var flg = window.performance.navigation.type;
        console.log(flg);
    });
    */

    console.log(window.performance.navigation.type);

    if (window.performance.navigation.type == 2) {
        //遷移後に動かす処理
        alert('ブラウザバックを検知しました。2');
    }
    /*
    history.replaceState(null, null, null);
    window.addEventListener('popstate', function (e) {
        alert('ブラウザバックを検知しました。');
    });
    */
});