odoo.define('web.StickyTableHeader', function (require) {
    "use strict";

    var core = require('web.core');
    var ListView = require('web.ListView');

    var _t = core._t;

    var StickyTableHeader = ListView.include({
        load_list: function () {
            var self = this;
            var result = self._super.apply(this, arguments);

            //scroll top to make sure the header displayed correctly, when the scroll bar position at the middle.
            $('.o_content').scrollTop(0);

            //resize window also need to scroll top, as the plugin will repaint the header.
            $(window).on('resize', function () {
                $('.o_content').scrollTop(0);
            });
            var scrollArea = self.$el.find('div.table-responsive')[0];
            if (scrollArea) {
                self.$el.find('table.o_list_view').each(function () {
                    //if set the fixedOffset as 0, this plugin will not work. Set it to a smaller value so that the gap is lighter before the header. 
                    $(this).stickyTableHeaders({ scrollableArea: scrollArea, leftOffset: scrollArea, fixedOffset: 0.01 })
                });
            }
            return result;
        },
    });
});

