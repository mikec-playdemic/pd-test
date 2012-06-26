package background;
import background.controllers.ContentScriptCallCommand;
import background.controllers.StartupCommand;
import background.events.ContentScriptCallEvent;
import background.services.ContentScriptService;
import background.services.OAuthService;
import base.BaseContext;
import models.UserModel;
import robothaxe.base.ContextEvent;
import models.ChromeLocalStorageModel;

/**
 * ...
 * @author MikeC
 */

class BackgroundContext extends BaseContext
{

	override public function startup():Void 
	{
		// Commands
		commandMap.mapEvent(ContextEvent.STARTUP, StartupCommand, ContextEvent);
		commandMap.mapEvent(ContentScriptCallEvent.CALLED, ContentScriptCallCommand, ContentScriptCallEvent);
		
		// Models
		injector.mapSingleton(ChromeLocalStorageModel);
		injector.mapSingleton(UserModel);
		
		// Services
		injector.mapSingleton(ContentScriptService);
		injector.mapSingleton(OAuthService);
	}
	
}