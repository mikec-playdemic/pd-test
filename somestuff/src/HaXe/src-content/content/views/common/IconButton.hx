package content.views.common;
import js.JQuery;
import hsl.haxe.Signaler;
import hsl.haxe.DirectSignaler;

/**
 * ...
 * @author MikeC
 */

class IconButton extends DivView
{
	public var clicked : Signaler<Void>;
	
	private var icon : ImgView;
	private var label : DivView;
	
	public function new(iconSrc:String, labelText:String) 
	{
		super();
		
		clicked = new DirectSignaler(this);
		
		icon = new ImgView(iconSrc);
		add(icon);
		
		label = new DivView();
		label.element.innerHTML = labelText;
		add(label);
		
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