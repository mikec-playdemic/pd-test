package content.views.header;
import base.BaseMediator;
import content.events.ContentEvent;
import models.SettingsModel;
import models.UserModel;

/**
 * ...
 * @author 
 */

class HeaderViewMediator extends BaseMediator
{
	@inject public var view : HeaderView;
	@inject public var userModel : UserModel;
	@inject public var settings : SettingsModel;
	
	override public function onRegister():Void 
	{
		view.closeTrigger.bindVoid(onCloseTriggered);
		view.setSelectedBlog(userModel.getBlog(settings.selectedBlogId).title);
		settings.selectedBlogIdChanged.bind(onSelectedBlogIdChanged);
	}	
	
	private function onCloseTriggered():Void 
	{
		dispatch(new ContentEvent(ContentEvent.CLOSE));
	}	
	
	private function onSelectedBlogIdChanged(b:String) : Void
	{
		view.setSelectedBlog(userModel.getBlog(b).title);
	}
	
	override public function onRemove():Void 
	{
		view.closeTrigger.unbindVoid(onCloseTriggered);
		settings.selectedBlogIdChanged.unbind(onSelectedBlogIdChanged);
	}
}