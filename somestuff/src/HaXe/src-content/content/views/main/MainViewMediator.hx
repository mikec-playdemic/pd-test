package content.views.main;
import base.BaseMediator;
import content.events.ContentEvent;
import content.events.MainViewEvent;
import robothaxe.mvcs.Mediator;

/**
 * ...
 * @author 
 */

class MainViewMediator extends BaseMediator
{
	@inject public var view : MainView;
	
	override public function onRegister():Void 
	{
		view.open();
		addContextListener(ContentEvent.CLOSE, onClose, ContentEvent);
		view.closed.bindVoid(onViewClosed);
	}	
	
	private function onViewClosed():Void 
	{
		dispatch(new MainViewEvent(MainViewEvent.CLOSED,view));
	}
	
	private function onClose(e):Void 
	{		
		view.close();		
	}
	
	override public function onRemove():Void 
	{
		view.closed.unbindVoid(onViewClosed);
	}

}