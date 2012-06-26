package content.events;
import base.BaseEvent;
import robothaxe.event.Event;

/**
 * ...
 * @author MikeC
 */

class ContentEvent extends BaseEvent
{
	public static var STARTUP = "ContentEvent_STARTUP";
	public static var CLOSE = "ContentEvent_CLOSE";	
	public static var VIEW_CLOSED = "ContentEvent_VIEW_CLOSED";

	public function new(type:String) 
	{
		super(type);
	}
	
}