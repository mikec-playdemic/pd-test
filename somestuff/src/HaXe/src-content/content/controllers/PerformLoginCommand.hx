package content.controllers;
import base.BaseCommand;
import content.events.LoginEvent;
import content.services.BackgroundService;
import events.AuthorizeEvent;
import js.JQuery;
import models.UserModel;

/**
 * ...
 * @author MikeC
 */

class PerformLoginCommand extends BaseCommand
{
	@inject public var background : BackgroundService;
	@inject public var userModel : UserModel;
	
	override public function execute():Void 
	{		
		trace('Sending authentication request');
		background.call('authorize', { }, onAuthorizeReturn);
	}
	
	private function onAuthorizeReturn(o) 
	{
		trace("Authentication returned okay, updatig user info");
		background.call('updateUserInfo', { }, onUserInfopdated);
	}
	
	private function onUserInfopdated(usr:SerialisableUser) 
	{
		trace("User info updated, updating the view");
		userModel.loadFromObject(usr);
		dispatch(new LoginEvent(LoginEvent.USER_LOGGED_IN));
	}
	
}