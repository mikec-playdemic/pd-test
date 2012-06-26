package content.views.foreground;

import content.events.LoginEvent;
import models.UserModel;
import robothaxe.base.MediatorBase;
import robothaxe.mvcs.Mediator;

/**
 * ...
 * @author 
 */

class ForegroundViewMediator extends Mediator
{
	@inject public var view : ForegroundView;
	@inject public var userModel : UserModel;
	
	override public function onRegister():Void 
	{
		trace('ForegroundViewMediator mediator made');
		
		if (userModel.isAuthorised) view.showPrimary();
		else view.showLogin();
		
		addContextListener(LoginEvent.USER_LOGGED_IN, onUserLoggedIn);
	}
	
	private function onUserLoggedIn(e):Void 
	{
		view.showPrimary();
	}
	
}