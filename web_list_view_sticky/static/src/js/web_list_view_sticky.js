odoo.define('web_list_view_sticky.ListView',function(require){

  "use strict";

  var ListView = require("web.ListView");

  ListView.include({
    load_list: function()
    {
		var self = this;
		this._super.apply(this, arguments);
    $(document).delegate("table.oe_list_content","mouseenter", function(){
      var scrollArea = 
        self.$el.parents(
          '.oe-view-manager.oe_view_manager_current'
        ).find('.oe-view-manager-content .oe-view-manager-view-list')[0];
      if(scrollArea && $("table.oe_list_content thead").length == 1)
      {
        self.$el.find('table.oe_list_content').each(function()
        {
          $(this).stickyTableHeaders(
            {
              scrollableArea: scrollArea, 
              leftOffset: scrollArea, 
              "fixedOffset": 0.1 
            }
          )
        });
      }
    });
    }
  });

});
