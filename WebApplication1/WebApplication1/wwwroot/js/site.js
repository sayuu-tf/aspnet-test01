// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
//console.log(window.performance.navigation.type);

$(document).ready(function () {
    /*
ブラウザやキャッシュの状況によって反応が異なるので、以下の２つを併記した方が良い。
https://qiita.com/tf_okrt/items/0cf72e5fe082cdec6801
    */

    window.addEventListener("pageshow", function (event) {
        if (event.persisted) {
            // キャッシュから読み込まれた際の挙動
            alert('event.persisted');
        }
    });

    window.addEventListener("pageshow", function (event) {
        var entries = performance.getEntriesByType("navigation");
        entries.forEach(function (entry) {
            if (entry.type == 'back_forward') {
                // ブラウザの履歴から読み込まれた際の処理
                alert('back_forward');
            } 
        });
    });

});