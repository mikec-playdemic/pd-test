package background.services;
import background.events.ContentScriptCallEvent;
import base.BaseService;
import chrome.Extension;

/**
 * ...
 * @author MikeC
 */

class ContentScriptService extends BaseService
{
	public function init() : Void
	{
		Extension.onRequest.addListener(onRequest);
	}
	
	private function onRequest(data, sender, senderCallbackHandler) 
	{
		if (data.action == 'content-script-call')
		{
			dispatch(new ContentScriptCallEvent(data.method, data.data, senderCallbackHandler));
		}
	}
}