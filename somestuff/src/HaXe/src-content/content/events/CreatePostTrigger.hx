package content.events;
import base.BaseEvent;

/**
 * ...
 * @author MikeC
 */

class CreatePostTrigger extends BaseEvent
{
	public static var CREATE = "CreatePostTrigger_CREATE";

	public var caption : String;
	
	public function new(caption:String)
	{
		this.caption = caption;
		super(CREATE);
	}
	
}