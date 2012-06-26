package content.events;
import base.BaseEvent;

/**
 * ...
 * @author MikeC
 */

class LoginEvent extends BaseEvent
{
	public static var DO_LOGIN = "LoginEvent_Login";
	public static var USER_LOGGED_IN = "LoginEvent_USER_LOGGED_IN";
	
	public function new(type:String) 
	{
		super(type);
	}
	
}