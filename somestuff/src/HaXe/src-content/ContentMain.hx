package ;
import base.BaseView;
import chrome.Extension;
import content.ContentContext;
import content.events.ContentEvent;
import content.models.PostDataModel;
import haxe.Firebug;
import js.Dom;
import js.JQuery;
import js.Lib;
import CommonDefs;
import models.UserModel;

/**
 * ...
 * @author 
 */

class ContentMain 
{
	private var _jeashDiv : JQuery;

	public function new()
	{
		trace("content ready!");
		addListeners();
	}	
	
	private function addListeners():Void 
	{
		Extension.onRequest.addListener(function(request, sender, sendResponse) 
		{
			if (request.action == "openPostPage") openPostPage(request.data);
		});
	}
	
	private function openPostPage(request:OpenContentWindowPacket) : Void 
	{	
		var context = new ContentContext(new BaseView(Lib.document.body));
		context.injector.getInstance(PostDataModel).data = request.value;
		context.injector.getInstance(PostDataModel).type = request.type;
		context.injector.getInstance(UserModel).loadFromObject(request.user);
		context.eventDispatcher.dispatchEvent(new ContentEvent(ContentEvent.STARTUP));		
	}
	
	static function main() 
	{
		Firebug.redirectTraces();
		new ContentMain();
	}
	
}