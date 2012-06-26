package content.views.main;

import base.BaseView;
import content.views.common.DivView;
import content.views.foreground.ForegroundView;
import haxe.Timer;
import js.JQuery;
import js.Lib;
import js.Dom;
import hsl.haxe.Signaler;
import hsl.haxe.DirectSignaler;

/**
 * ...
 * @author 
 */

class MainView extends BaseView
{
	public var bg : DivView;	
	public var fg : ForegroundView;
	
	public var closed : Signaler<Void>;

	public function new() 
	{
		super(Lib.document.createElement('div'));		
		
		closed = new DirectSignaler(this);
		
		// Add children
		add(bg = new DivView('ptt_background'));	
		add(fg = new ForegroundView());
		
		// Listen for some events
		new JQuery(cast Lib.window).resize(onWindowResize);
		
		// As this is the main view we are responsible for keeping the loop going
		startUpdates();
	}
	
	public function open() : Void
	{		
		updateLayout();
		new JQuery(bg.element).css({opacity:0}).fadeTo(250, 0.8);
		new JQuery(fg.element).css( { left: -600 } ).animate( { left: Lib.window.innerWidth/2-300, easing:'easein' }, 250);
	}
	
	public function close() : Void
	{
		new JQuery(bg.element).css({opacity:0.8}).fadeTo(250, 0, onCloseComplete);
		new JQuery(fg.element).animate( { left: Lib.window.innerWidth, easing:'easein' }, 250);
	}
	
	private function onCloseComplete():Void 
	{
		closed.dispatch();
		stopUpdates();
	}
	
	override public function updateLayout():Void 
	{
		var ww  = Lib.window.innerWidth;
		var wh  = Lib.window.innerHeight;
		var fgw  = new JQuery(fg.element).width();
		var fgh  = new JQuery(fg.element).height();
		
		fg.element.style.left = ((ww / 2) - (fgw / 2)) + 'px';
		fg.element.style.top = ((wh / 2) - (fgh / 2)) + 'px';
	}
	
	private function onWindowResize(e):Void 
	{
		updateLayout();
	}	
}