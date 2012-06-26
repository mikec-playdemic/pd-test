package events;
import base.BaseEvent;

/**
 * ...
 * @author MikeC
 */

class AuthorizeEvent extends BaseEvent
{
	public static var DO_AUTHORIZE = "AuthorizeEvent_DO_AUTHORIZE";
	public static var AUTHORIZED = "AuthorizeEvent_AUTHORIZED";
	public static var AUTHORIZE_ERROR = "AuthorizeEvent_AUTHORIZE_ERROR";

	public function new(type:String) 
	{
		super(type);
	}
	
}