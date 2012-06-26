package background.controllers;
import background.events.ContentScriptCallEvent;
import background.services.OAuthService;
import base.BaseCommand;
import models.UserModel;

/**
 * ...
 * @author MikeC
 */

class ContentScriptCallCommand extends BaseCommand
{
	@inject public var event : ContentScriptCallEvent;
	@inject public var oauth : OAuthService;
	@inject public var userModel : UserModel;
	
	override public function execute():Void 
	{		
		trace('Recieved content script call: ' + event.method);
		
		if (event.method == "authorize")
		{
			oauth.authorize(function() 
			{ 
				trace('Authorize returned');
				userModel.isAuthorised = oauth.isAuthorised;
				event.callbackHandler( { } );
			});
		}
		else if (event.method == "updateUserInfo")
		{
			oauth.getUserInfo(function(result) {
				userModel.updateFromTumblr(result);
				event.callbackHandler( userModel.getAsObject() );
			});
		}
		else if (event.method == "getUser")
		{
			event.callbackHandler( userModel.getAsObject() );
		}
		else if (event.method == "create-post")
		{
			oauth.createPost(event.data);
		}
	}	
}