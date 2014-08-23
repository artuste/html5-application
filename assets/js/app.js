$(function () {

    var $parent = $('.navbar-search-filter'),
        $boxWrapper = $(".box-wrapper"),
        $panelActions = $('.panel-actions'),
        $panelTop = $('.panel-top'),
        $searchBtn = $('.search-button', $parent),
        $arrowBtn = $('.arrow');

    $searchBtn.click(function () {
        $parent.hide();
        $parent.next().fadeIn(300).removeClass('hidden');

        return false;
    });

    $arrowBtn.click(function () {
        var $this = $(this, $parent),
            isBoxWrapper = $this.parents('.box-toggled-wrapper').is(':visible');

        if (isBoxWrapper) {
            if ($this.hasClass('revert')) {
                $this.parent().next().fadeOut(200);
                $this.removeClass('revert');
            } else {
                $this.parent().next().fadeIn(200);
                $this.addClass('revert');
            }
        }

        return false;
    });

    function initScrollbar () {
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

    window.onresize = function (event) {
        initScrollbar();
    };

    initScrollbar();
});