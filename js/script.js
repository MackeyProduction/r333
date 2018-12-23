var readMoreContent;
var readMoreContentShow;
var readMoreContentHide;

$(document).ready(function () {
    readMoreContent = $("#readMoreAboutUs");
    readMoreContentShow = $("#readMoreAboutUs-show");
    readMoreContentHide = $("#readMoreAboutUs-hide");
    var height = readMoreContent.height();

    // hide elements
    readMoreContentShow.hide();
    readMoreContentHide.hide();

    if (height >= 233) {
        hideContent();
    }

    readMoreContentShow.click(function () {
        showContent();
    });

    readMoreContentHide.click(function () {
        hideContent();
    });
});

function showContent() {
    readMoreContent.attr("style", "max-height: auto;");
    readMoreContentShow.hide();
    readMoreContentHide.show();
}

function hideContent() {
    readMoreContent.attr("style", "max-height: 233px; overflow: hidden;");
    readMoreContentShow.show();
    readMoreContentHide.hide();
}