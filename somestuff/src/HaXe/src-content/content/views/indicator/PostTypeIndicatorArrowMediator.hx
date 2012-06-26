package content.views.indicator;
import base.BaseMediator;
import content.events.GeneralViewEvent;
import content.models.PostTypesModel;

/**
 * ...
 * @author MikeC
 */

class PostTypeIndicatorArrowMediator extends BaseMediator
{
	@inject public var view : PostTypeIndicatorArrow;
	@inject public var postTypes : PostTypesModel;
	
	override public function onRegister():Void 
	{
		postTypes.selectedTabChanged.bindVoid(onSelectedPostTypeChanged);
		view.setSelectedTab(postTypes.selectedTab, postTypes.types);
		view.animatedSignal.bindVoid(onAnimated);
	}	
	
	private function onAnimated() : Void
	{
		dispatch(new GeneralViewEvent(GeneralViewEvent.REPOSITION_POSITIONER));
	}	
	
	private function onSelectedPostTypeChanged():Void 
	{
		view.setSelectedTab(postTypes.selectedTab, postTypes.types);
	}
	
	override public function onRemove():Void 
	{
		postTypes.selectedTabChanged.unbindVoid(onSelectedPostTypeChanged);
		view.animatedSignal.unbindVoid(onAnimated);
	}		
}