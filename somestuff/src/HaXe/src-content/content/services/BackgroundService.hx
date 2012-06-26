package content.services;
import base.BaseEvent;
import base.BaseService;
import chrome.Extension;
import js.Lib;

/**
 * ...
 * @author MikeC
 */

class BackgroundService extends BaseService
{	
	public function call(methodName:String, data:Dynamic, callbackHandler:Dynamic->Void) : Void
	{
		Extension.sendRequest( { action:'content-script-call', method:methodName, data:data }, function(response) { callbackHandler(response); } );
	}
}