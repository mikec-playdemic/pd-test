package background.controllers;
import base.BaseCommand;
import chrome.Tab;
import chrome.Tabs;
import chrome.ContextMenus;
import CommonDefs;
import models.UserModel;

/**
 * ...
 * @author 
 */

class SetupContextMenuListenersCommand extends BaseCommand
{
	@inject public var userModel : UserModel;

	override public function execute():Void 
	{				
		trace("Adding context menus..");
		ContextMenus.create( { title:"Post To Tumblr", contexts:['image'], onclick:function(info:Dynamic, tab:Tab) { open('image', info.srcUrl); } } );
		ContextMenus.create( { title:"Post To Tumblr", contexts:['selection'], onclick:function(info:Dynamic, tab:Tab) { open('quote', info.selectionText); } } );
		ContextMenus.create( { title:"Post To Tumblr", contexts:['page'], onclick:function(info:Dynamic, tab:Tab) { open('link', tab.title); } } );
		ContextMenus.create( { title:"Post To Tumblr", contexts:['link'], onclick:function(info:Dynamic, tab:Tab) { open('link', info.linkUrl); } } );
	}
	
	private function open(postType:String, value:String) : Void
	{	
		Tabs.getSelected(null, function(tab) 
		{	
			var data : OpenContentWindowPacket = { type:postType, value:value, user:userModel.getAsObject() };
			Tabs.sendRequest(tab.id, {action: "openPostPage", data:data}, function(response) { });
		});
	}	
}