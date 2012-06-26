package content.controllers;
import base.BaseCommand;
import base.BaseView;
import content.events.MainViewEvent;

/**
 * ...
 * @author 
 */

class MainViewClosedCommand extends BaseCommand
{
	@inject public var event : MainViewEvent;
	
	override public function execute():Void 
	{		
		trace('shutting down!');
		
		var base : BaseView = cast contextView;
		base.remove(event.mainView);
	}	
}