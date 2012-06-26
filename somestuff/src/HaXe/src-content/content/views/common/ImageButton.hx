package content.views.common;
import base.BaseView;
import chrome.Extension;
import js.JQuery;
import js.Lib;
import js.Dom;
import hsl.haxe.Signaler;
import hsl.haxe.DirectSignaler;

/**
 * ...
 * @author 
 */

class ImageButton extends BaseView
{
	public var isSelected(default, set_isSelected) : Bool;
	public var clicked : Signaler<Void>;	
	public var image : Image;

	private var normalImage : String;
	private var hoverImage : String;
	private var selectedImage : String;
	private var hoverSelectedImage : String;
	private var isMouseOver : Bool;
	
	public function new(normalImage:String, hoverImage:String, ?selectedImage:String, ?hoverSelectedImage:String) 
	{
		super(image = cast Lib.document.createElement('img'));
		
		this.normalImage = normalImage;
		this.hoverImage = hoverImage;
		this.selectedImage = selectedImage==null?hoverImage:selectedImage;
		this.hoverSelectedImage = hoverSelectedImage==null?hoverImage:hoverSelectedImage;			
		
		isSelected = false;
		isMouseOver = false;
		clicked = new DirectSignaler(this);
		
		image.src = normalImage;
		image.style.cursor = 'hand';
		
		new JQuery(image).mouseover(onMouseOver);
		new JQuery(image).mouseout(onMouseOut);
		new JQuery(image).click(onClick);		
	}
	
	private function onMouseOver(e):Void 
	{
		isMouseOver = true;
		update();
	}
	
	private function onMouseOut(e):Void 
	{
		isMouseOver = false;
		update();
	}
	
	private function update() : Void
	{
		if (isSelected)
		{
			if (isMouseOver)
			{
				image.src = hoverSelectedImage;
			}
			else
			{
				image.src = selectedImage;
			}
		}
		else 
		{
			if (isMouseOver)
			{
				image.src = hoverImage;
			}
			else
			{
				image.src = normalImage;
			}
		}		
	}
	
	private function onClick(e):Void 
	{
		clicked.dispatch();
		update();
	}
	
	private function set_isSelected(b:Bool) : Bool
	{
		isSelected = b;
		update();
		return isSelected;
	}
	
}