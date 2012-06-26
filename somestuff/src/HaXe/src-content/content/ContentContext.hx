package content;

import base.BaseContext;
import base.JSInjector;
import content.controllers.CreatePostCommand;
import content.controllers.MainViewClosedCommand;
import content.controllers.PerformLoginCommand;
import content.controllers.StartupCommand;
import content.events.ContentEvent;
import content.events.CreatePostTrigger;
import content.events.LoginEvent;
import content.events.MainViewEvent;
import content.models.PostDataModel;
import content.models.PostTypesModel;
import content.services.BackgroundService;
import content.views.foreground.ForegroundView;
import content.views.foreground.ForegroundViewMediator;
import content.views.header.HeaderView;
import content.views.header.HeaderViewMediator;
import content.views.indicator.PostTypeIndicatorArrow;
import content.views.indicator.PostTypeIndicatorArrowMediator;
import content.views.login.LoginView;
import content.views.login.LoginViewMediator;
import content.views.main.MainView;
import content.views.main.MainViewMediator;
import content.views.post.PostContentView;
import content.views.post.PostContentViewMediator;
import content.views.postTypes.PostTypeTab;
import content.views.postTypes.PostTypeTabMediator;
import content.views.postTypes.PostTypeTabsView;
import content.views.postTypes.PostTypeTabsViewMediator;
import models.ChromeLocalStorageModel;
import models.UserModel;
import robothaxe.base.ContextEvent;
import robothaxe.core.IInjector;
import robothaxe.mvcs.Context;
import content.views.primary.PrimaryView;
import content.views.primary.PrimaryViewMedator;
import content.views.header.BlogsSelectorView;
import content.views.header.BlogsSelectorViewMediator;
import models.SettingsModel;

/**
 * ...
 * @author 
 */

class ContentContext extends BaseContext
{
	override public function startup():Void 
	{				
		// Commands
		commandMap.mapEvent(ContentEvent.STARTUP, StartupCommand, ContentEvent);
		commandMap.mapEvent(MainViewEvent.CLOSED, MainViewClosedCommand, MainViewEvent);
		commandMap.mapEvent(LoginEvent.DO_LOGIN, PerformLoginCommand, LoginEvent);
		commandMap.mapEvent(CreatePostTrigger.CREATE, CreatePostCommand, CreatePostTrigger);
		
		// Mediators
		mediatorMap.mapView(MainView, MainViewMediator);
		mediatorMap.mapView(ForegroundView, ForegroundViewMediator);
		mediatorMap.mapView(HeaderView, HeaderViewMediator);
		mediatorMap.mapView(PostTypeTabsView, PostTypeTabsViewMediator);
		mediatorMap.mapView(PostTypeTab, PostTypeTabMediator);
		mediatorMap.mapView(PostTypeIndicatorArrow, PostTypeIndicatorArrowMediator);
		mediatorMap.mapView(PostContentView, PostContentViewMediator);
		mediatorMap.mapView(LoginView, LoginViewMediator);
		mediatorMap.mapView(PrimaryView, PrimarViewMedator);
		mediatorMap.mapView(BlogsSelectorView, BlogsSelectorViewMediator);
		
		// Models
		injector.mapSingleton(PostTypesModel);
		injector.mapSingleton(PostDataModel);		
		injector.mapSingleton(UserModel);
		injector.mapSingleton(ChromeLocalStorageModel);
		injector.mapSingleton(SettingsModel);
		
		// Services
		injector.mapSingleton(BackgroundService);
	}
}