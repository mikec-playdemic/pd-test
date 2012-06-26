package content.events;
import base.BaseEvent;

/**
 * ...
 * @author 
 */

class GeneralViewEvent extends BaseEvent
{
	public static var REPOSITION_POSITIONER = "GeneralViewEvent_REPOSITION_POSITIONER";

	public function new(type:String) 
	{
		super(type);
	}
	
}