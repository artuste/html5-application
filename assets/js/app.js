$(function () {

    var $parent = $('.navbar-search-filter'),
        $sitePanel = $('.site-panel'),
        $siteContent = $('.site-content'),
        $boxWrapper = $(".box-wrapper"),
        $panelActions = $('.panel-actions'),
        $panelTop = $('.panel-top'),
        $searchBtn = $('.search-button', $parent),
        $arrowBtn = $('.arrow'),
        $mobileShowContent = $('.show-site-content');

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

    $mobileShowContent.click(function () {
        var $this = $(this);

        if($this.hasClass('content-visible')) {
            $this.removeClass('content-visible');
            $siteContent.fadeOut(200, function () {
                $sitePanel.fadeIn(function () {
                    $('.show-site-content').text('Show content');
                });

            });
        } else {
            $sitePanel.fadeOut(300, function () {
                $siteContent.fadeIn(300, function () {
                    $(this).css('display', 'table-cell');
                    $this.addClass('content-visible');
                    $('.show-site-content').text('Show panel');
                });
            });
        }

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