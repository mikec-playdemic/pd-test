package content.controllers;
import base.BaseCommand;
import content.events.ContentEvent;
import content.events.CreatePostTrigger;
import content.models.PostDataModel;
import content.services.BackgroundService;
import models.UserModel;
import CommonDefs;

/**
 * ...
 * @author MikeC
 */

class CreatePostCommand extends BaseCommand
{
	@inject public var trigger : CreatePostTrigger;
	@inject public var background : BackgroundService;
	@inject public var data : PostDataModel;
	@inject public var user : UserModel;

	override public function execute():Void 
	{	
		trace('Creating post');
		var data : CreatePostDataPacket = { data:data.data, type:data.type, caption:trigger.caption, blog:user.getPrimaryBlog() };
		background.call('create-post', data, function(o) { } );
		dispatch(new ContentEvent(ContentEvent.CLOSE));
	}
	
}