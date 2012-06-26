package content.views.common;
import hsl.haxe.Signaler;
import hsl.haxe.DirectSignaler;
import js.JQuery;

/**
 * ...
 * @author MikeC
 */

class SimpleButton extends DivView
{
	public var clicked : Signaler<Void>;
	
	private var label : DivView;
	
	public function new(labelText:String) 
	{
		super();
		
		clicked = new DirectSignaler(this);
		
		element.innerHTML = labelText;
		
		new JQuery(element).mouseover(onMouseOver);
		new JQuery(element).mouseout(onMouseOut);
		new JQuery(element).click(onClick);		
	}
	
	private function onMouseOver(e):Void 
	{
		element.className = "hover";
	}
	
	private function onMouseOut(e):Void 
	{
		element.className = null;
	}	
	
	private function onClick(e):Void 
	{
		clicked.dispatch();
	}
}