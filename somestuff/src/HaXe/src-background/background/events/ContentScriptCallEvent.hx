package background.events;
import base.BaseEvent;

/**
 * ...
 * @author MikeC
 */

class ContentScriptCallEvent extends BaseEvent
{
	public static var CALLED = "ContentScriptCallEvent_CALLED";

	public var method : String;
	public var data : Dynamic;
	public var callbackHandler : Dynamic->Void;
	
	public function new(method:String, data:Dynamic, callbackHandler:Dynamic->Void) 
	{
		this.method = method;
		this.data = data;
		this.callbackHandler = callbackHandler;
		super(CALLED);
	}
	
}