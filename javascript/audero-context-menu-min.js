(function($){var defaultValues={'idMenu':null,'posX':null,'posY':null};var elementsSettings={};var methods={init:function(options){if(typeof options!=='object')options={'idMenu':options};var settings=$.extend({},defaultValues,options);var id=this.attr('id');if(settings.idMenu==undefined||settings.idMenu==null)$.error('No menu specified');elementsSettings[id]=settings;$('html').on('contextmenu click',function(){methods.hide(elementsSettings[id].idMenu)});this.on('contextmenu auderoContextMenu',function(event){event.preventDefault();event.stopPropagation();var params=$.extend({},elementsSettings[id]);if(elementsSettings[id].posX==null||elementsSettings[id].posY==null){params.posX=event.pageX;params.posY=event.pageY}methods.show(params,event,id);return false})},show:function(params,event,idElem){var idMenu;if(event!=undefined){event.preventDefault();event.stopPropagation()}if(typeof params==='object')idMenu=params.idMenu;else idMenu=params;if(idMenu==undefined&&elementsSettings[idElem]==undefined)$.error('No menu specified');if(idMenu==undefined)idMenu=elementsSettings.idMenu;methods.hide(idMenu);if(typeof params!=='object'||params.posX==undefined||params.posY==undefined){if(event==undefined){params={'idMenu':params,'posX':0,'posY':0}}else{params={'idMenu':params,'posX':event.pageX,'posY':event.pageY}}}params.posY=parseInt(params.posY);params.posX=parseInt(params.posX);$('#'+idMenu).css('top',params.posY+'px').css('left',params.posX+'px').show();return false},hide:function(id){if(id==undefined||id==null){for(var Key in elementsSettings)methods.hide(elementsSettings[Key].idMenu)}else if($.isArray(id)){for(i=0;i<id.length;i++)methods.hide(id[i])}else $('#'+id).hide()}};$.fn.auderoContextMenu=function(method){if(methods[method])return methods[method].apply(this,Array.prototype.slice.call(arguments,1));else if(typeof method==='object'||typeof method==='string'||!method)return methods.init.apply(this,arguments);else $.error('Method '+method+' does not exist on jQuery.auderoContextMenu')}})(jQuery);