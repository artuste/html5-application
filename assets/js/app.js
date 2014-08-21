$(function () {
var $parent = $('.navbar-search-filter');

    $('.search-button', $parent).click(function () {
        $parent.hide();
        $parent.next().removeClass('hidden');

        return false;
    });
});