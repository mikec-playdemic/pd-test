package content.views.post;
import base.BaseMediator;
import content.events.ContentEvent;
import content.events.CreatePostTrigger;
import content.models.PostDataModel;
import content.models.PostTypesModel;

/**
 * ...
 * @author MikeC
 */

class PostContentViewMediator extends BaseMediator
{
	@inject public var view : PostContentView;
	@inject public var dataModel : PostDataModel;
	@inject public var types : PostTypesModel;

	override public function onRegister():Void 
	{
		view.setData(dataModel.data, types.selectedTab);
		types.selectedTabChanged.bindVoid(onSelectedTypeChanged);
		view.captionOpened.bindVoid(onCaptionOpened);
		view.createPostClicked.bindVoid(onCreatePost);
	}	
	
	private function onCreatePost() 
	{
		dispatch(new CreatePostTrigger(view.getCaptionText()));
	}
	
	private function onCaptionOpened() 
	{
	}
	
	private function onSelectedTypeChanged():Void 
	{
		view.setData(dataModel.data, types.selectedTab);
	}
	
	override public function onRemove():Void 
	{
		types.selectedTabChanged.unbindVoid(onSelectedTypeChanged);
		view.captionOpened.unbindVoid(onCaptionOpened);
		view.createPostClicked.unbindVoid(onCreatePost);
	}	
	
}