package content.views.header;
import base.BaseMediator;
import models.SettingsModel;
import models.UserModel;

/**
 * ...
 * @author 
 */

class BlogsSelectorViewMediator extends BaseMediator
{
	@inject public var view : BlogsSelectorView;
	@inject public var user : UserModel;
	@inject public var settings : SettingsModel;
	
	override public function onRegister():Void 
	{
		view.setBlogs(user.tumblrDetails.blogs, settings.selectedBlogId);
		view.blogSelected.bind(onBlogSelected);
	}
	
	private function onBlogSelected(b:TumblrBlogDetail)
	{
		settings.selectedBlogId = b.name;
	}
	
}