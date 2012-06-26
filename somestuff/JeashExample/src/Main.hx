package ;
import haxe.Firebug;
import jeash.Lib;
import jeash.events.Event;

/**
 * ...
 * @author 
 */

class Main 
{
	
	static function main() 
	{		
		Firebug.redirectTraces();
		Lib.current.stage.alpha = 0.5;
		Lib.current.stage.addEventListener(Event.RESIZE, onResize);
	}
	
	static function onResize(e)
	{
		var s = Lib.current.stage;
		trace("RESIZE "+s.stageWidth+", "+s.stageHeight);
	}
	
}