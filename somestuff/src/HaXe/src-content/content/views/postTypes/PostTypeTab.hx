package content.views.postTypes;
import base.BaseView;
import chrome.Extension;
import models.postTypes.IPostType;
import content.views.common.DivView;
import content.views.common.ImageButton;
import hsl.haxe.Signaler;
import hsl.haxe.DirectSignaler;

/**
 * ...
 * @author MikeC
 */

class PostTypeTab extends DivView
{
	public var selected : Signaler<Void>;
	
	public var type : IPostType;
	public var button : ImageButton;
	public var isSelected : Bool;

	public function new(type:IPostType) 
	{
		this.type = type;
		isSelected = false;
		
		super();
		selected = new DirectSignaler(this);
				
		button = new ImageButton(		
			Extension.getURL('images/' + type.icon + ".png"),
			Extension.getURL('images/' + type.icon + "_hover.png"),
			Extension.getURL('images/' + type.icon + "_hover.png"),
			Extension.getURL('images/' + type.icon + "_hover.png")
		);
		
		button.image.align = type.name;
		button.clicked.addBubblingTarget(selected);
		
		add(button);
	}
	
	public function setSeleted(isSelected:Bool) : Void
	{
		//if (this.isSelected == isSelected) return;
		button.isSelected = isSelected;
	}
	
}