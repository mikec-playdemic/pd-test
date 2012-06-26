package content.views.postTypes;
import base.BaseMediator;
import content.models.PostTypesModel;

/**
 * ...
 * @author MikeC
 */

class PostTypeTabsViewMediator extends BaseMediator
{
	@inject public var view : PostTypeTabsView;
	@inject public var types : PostTypesModel;
	
	override public function onRegister():Void 
	{
		view.types = types.types;
		view.construct();
	}	
	
	override public function onRemove():Void 
	{
		// HOOK: Override
	}
}