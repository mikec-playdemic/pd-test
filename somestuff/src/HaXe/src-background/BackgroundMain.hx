package ;

import background.BackgroundContext;
import base.BaseView;
import chrome.ContextMenus;
import chrome.Tab;
import chrome.Tabs;
import haxe.Firebug;
import js.Lib;
import robothaxe.base.ContextEvent;

/**
 * ...
 * @author 
 */

class BackgroundMain 
{
	public function new()
	{
		Lib.window.onload = onWindowLoad;
	}
	
	private function onWindowLoad(e) : Void
	{
		var context = new BackgroundContext(new BaseView(Lib.document.body));
		context.eventDispatcher.dispatchEvent(new ContextEvent(ContextEvent.STARTUP));	
	}
	
	static function main() 
	{
		Firebug.redirectTraces();
		new BackgroundMain();
	}
	
}