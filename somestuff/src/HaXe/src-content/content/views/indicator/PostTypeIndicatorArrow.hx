package content.views.indicator;
import base.BaseView;
import chrome.Extension;
import content.views.common.DivView;
import js.JQuery;
import js.Lib;
import js.Dom;
import models.postTypes.IPostType;
import hsl.haxe.Signaler;
import hsl.haxe.DirectSignaler;

/**
 * ...
 * @author 
 */

class PostTypeIndicatorArrow extends BaseView
{
	public var animatedSignal : Signaler<Void>;
	public var image : Image;
		
	public function new() 
	{
		super(image = cast Lib.document.createElement('img'));		
		animatedSignal = new DirectSignaler(this);
		image.src = Extension.getURL('images/left_white_arrow.png');	
		new JQuery(image).css( { top:"0px", position:'relative' } );
	}
	
	public function setSelectedTab(selectedTab:IPostType, types:Array<IPostType>):Void 
	{
		var fromTop : Int = (Lambda.indexOf(types, selectedTab) * 58) + 40;
		var j : Dynamic = cast new JQuery(image);
		j.animate( { top:fromTop },{step:function(fx,now) { animatedSignal.dispatch();  }} );
	}
	
}