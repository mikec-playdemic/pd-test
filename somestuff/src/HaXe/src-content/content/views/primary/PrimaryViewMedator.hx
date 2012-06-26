package content.views.primary;
import base.BaseMediator;
import content.events.GeneralViewEvent;

/**
 * ...
 * @author 
 */

class PrimarViewMedator extends BaseMediator
{
	@inject public var view : PrimaryView;
	
	override public function onRegister():Void 
	{			
	}	
	
	private function onRepositionPositioner(e)
	{
	}
}