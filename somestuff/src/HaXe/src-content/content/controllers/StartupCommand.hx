package content.controllers;

import base.BaseCommand;
import base.BaseView;
import content.models.PostDataModel;
import content.models.PostTypesModel;
import content.views.main.MainView;
import models.SettingsModel;
import models.UserModel;

/**
 * ...
 * @author 
 */

class StartupCommand extends BaseCommand
{		
	@inject public var user : UserModel;
	@inject public var postTypes : PostTypesModel;
	@inject public var data : PostDataModel;
	@inject public var settings : SettingsModel;
	
	override public function execute():Void
	{
		trace("Starting up..");		
		
		// Working out which should be the first selected tab
		postTypes.setInitialSelectedType(data.type);
		
		// Default to primary if one not yet set
		if (settings.selectedBlogId == null) settings.selectedBlogId = user.getPrimaryBlog().name;
		
		var base : BaseView = cast contextView;
		base.add(new MainView());	
	}	
}