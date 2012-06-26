package background.controllers;
import background.services.ContentScriptService;
import background.services.OAuthService;
import base.BaseCommand;
import chrome.ContextMenus;
import chrome.Tab;
import chrome.Tabs;
import models.ChromeLocalStorageModel;
import CommonDefs;
import models.UserModel;

/**
 * ...
 * @author MikeC
 */

class StartupCommand extends BaseCommand
{
	@inject public var oauth : OAuthService;
	@inject public var contentScripts : ContentScriptService;
	@inject public var localStorage : ChromeLocalStorageModel;
	@inject public var userModel : UserModel;
	
	override public function execute():Void 
	{		
		injector.instantiate(SetupContextMenuListenersCommand).execute();
		
		trace('Initting oAuth..');
		oauth.init();
		userModel.isAuthorised = oauth.isAuthorised;
		
		trace('Updating user info from Tumblr');
		if (userModel.isAuthorised)
			oauth.getUserInfo(function(result) { userModel.updateFromTumblr(result); });
		
		trace('Initting content script listeners..');
		contentScripts.init();
	}
	
	
}