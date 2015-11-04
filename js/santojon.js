/* Script to scroll content */
function scrollToID(container, elementOffset, id) {
    var offset = elementOffset;
    var targetOffset = $(id).offset().top - offset;
    if (container != "html,body") {
        targetOffset = targetOffset + $(container).scrollTop();
    }
    $(container).animate({scrollTop: targetOffset}, 500);
}