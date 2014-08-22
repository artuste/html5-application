$(function () {
var $parent = $('.navbar-search-filter');

    $('.search-button', $parent).click(function () {
        $parent.hide();
        $parent.next().removeClass('hidden');

        return false;
    });
    
    var globalHeight = window.innerHeight,
        panelActionsBottomHeight = $('.panel-actions').height(),
        panelTopHeight = $('.panel-top').height(),
        boxWrapperHeight = globalHeight - panelActionsBottomHeight - panelTopHeight;
    
    $(".box-wrapper")
        .css('height', boxWrapperHeight)
        .mCustomScrollbar({
            theme:"dark"
        });
});