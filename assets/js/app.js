$(function () {
var $parent = $('.navbar-search-filter'),
    $boxWrapper = $(".box-wrapper"),
    $panelActions = $('.panel-actions'),
    $panelTop = $('.panel-top');

    $('.search-button', $parent).click(function () {
        $parent.hide();
        $parent.next().removeClass('hidden');

        return false;
    });
    
    function initScrollbar() {
        var globalHeight = window.innerHeight,
        panelActionsBottomHeight = $panelActions.height(),
        panelTopHeight = $panelTop.height(),
        boxWrapperHeight = (globalHeight - panelActionsBottomHeight - panelTopHeight);
        
        $boxWrapper
            .css('height', boxWrapperHeight)
            .mCustomScrollbar({
                theme: 'dark'
            });
    }
    
    window.onresize = function(event) {
       initScrollbar();
    };
    
    initScrollbar();
});