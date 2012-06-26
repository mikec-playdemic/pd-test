package content.views.login;
import base.BaseMediator;
import content.events.LoginEvent;
import js.JQuery;

/**
 * ...
 * @author MikeC
 */

class LoginViewMediator extends BaseMediator
{
	@inject public var view : LoginView;

	override public function onRegister():Void 
	{
		view.performLoginTrigger.bindVoid(onPerformLogin);
	}	
	
	private function onPerformLogin() 
	{
		dispatch(new LoginEvent(LoginEvent.DO_LOGIN));
	}
	
	override public function onRemove():Void 
	{
		view.performLoginTrigger.unbindVoid(onPerformLogin);
	}
	
}