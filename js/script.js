var readMoreContent;
var readMoreContentShow;
var readMoreContentHide;

$(document).ready(function () {
    var arrayReadMoreContent = [];
    var arrayReadMoreContentHide = [];
    var arrayReadMoreContentShow = [];

    $("div[data-readMore]").each(function (i) {
        readMoreContent = $("#" + $(this).attr("data-readmore"));
        readMoreContentHide = $("#" + $(this).find("button:last").attr("data-readmorehide"));
        readMoreContentShow = $("#" + $(this).find("button:first").attr("data-readmoreshow"));

        // hide elements
        readMoreContentShow.show();
        readMoreContentHide.hide();

        arrayReadMoreContent.push(readMoreContent);
        arrayReadMoreContentHide.push(readMoreContentHide);
        arrayReadMoreContentShow.push(readMoreContentShow);
    });

    $("button[data-readmorehide]").click(function () {
        var readMoreHideButton = $(this).attr("data-readmorehide");

        if (typeof readMoreHideButton !== typeof undefined) {
            readMoreContentHide = $("#" + readMoreHideButton);
            hideContent();
        }
    });

    $("button[data-readmoreshow]").click(function () {
        var readMoreShowButton = $(this).attr("data-readmoreshow");

        if (typeof readMoreShowButton !== typeof undefined) {
            for (var i = 0; i < arrayReadMoreContentShow.length; i++) {
                if (readMoreShowButton === arrayReadMoreContentShow[i][0].id) {
                    readMoreContentShow = $("#" + readMoreShowButton);
                    readMoreContentHide = $("#" + arrayReadMoreContentHide[i][0].id);
                    readMoreContent = $("#" + arrayReadMoreContent[i][0].id);
                    showContent();
                }
            }
        }
    });
});

function showContent() {
    readMoreContent.addClass("less");
    readMoreContentShow.hide();
    readMoreContentHide.show();
}

function hideContent() {
    readMoreContent.removeClass("less");
    readMoreContentShow.show();
    readMoreContentHide.hide();
}