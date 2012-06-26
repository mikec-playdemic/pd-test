package content.events;
import base.BaseEvent;
import content.views.main.MainView;
import robothaxe.event.Event;

/**
 * ...
 * @author MikeC
 */

class MainViewEvent extends BaseEvent
{
	public static var CLOSED : String = "MainViewEvent_CLOSED";
	
	public var mainView : MainView;
	
	public function new(type:String,mainView:MainView) 
	{
		this.mainView = mainView;		
		super(type);
	}
	
}