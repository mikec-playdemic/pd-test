package content.views.postTypes;
import base.BaseMediator;
import content.models.PostTypesModel;

/**
 * ...
 * @author MikeC
 */

class PostTypeTabMediator extends BaseMediator
{
	@inject public var view : PostTypeTab;
	@inject public var postTypes : PostTypesModel;
	
	override public function onRegister():Void 
	{
		view.selected.bindVoid(onTabSelected);
		postTypes.selectedTabChanged.bindVoid(onSelectedTabChanged);
	}	
	
	private function onTabSelected():Void 
	{
		postTypes.selectedTab = view.type;
	}
	
	private function onSelectedTabChanged():Void 
	{
		view.setSeleted(view.type==postTypes.selectedTab);
	}
	
	override public function onRemove():Void 
	{
		view.selected.unbindVoid(onTabSelected);
		postTypes.selectedTabChanged.unbindVoid(onSelectedTabChanged);
	}	
}