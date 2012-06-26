package base;
import haxe.Timer;
import js.Dom;
import js.JQuery;
import robothaxe.core.IViewContainer;

/**
 * ...
 * @author 
 */

class BaseView implements IViewContainer
{
	public var viewAdded:Dynamic -> Void;
	public var viewRemoved:Dynamic -> Void;
	
	public var element : HtmlDom;
	public var parent : BaseView;
	public var children : Array<BaseView>;
	public var isLayoutInvalid : Bool;
	
	private var updateTimer : Timer;
	
	public function new(element:HtmlDom) 
	{
		this.element = element;
		this.children = [];
		isLayoutInvalid = true;
	}	
	
	private function startUpdates() : Void
	{
		updateTimer = new Timer(16);
		updateTimer.run = onUpdateTick;
	}

	private function stopUpdates() : Void
	{
		updateTimer.stop();
	}
	
	public function onUpdateTick() 
	{
		if (isLayoutInvalid)
		{
			for (c in children) if (c.isLayoutInvalid) { c.updateLayout(); c.isLayoutInvalid = false; }
			updateLayout();
			isLayoutInvalid = false;
		}
	}
	
	public function add(child:BaseView) : BaseView
	{
		children.push(child);
		child.parent = this;
		child.viewAdded = viewAdded;
		child.viewRemoved = viewRemoved;		
		if(viewAdded!=null) child.addChildren();
		element.appendChild(child.element);
		if (viewAdded != null) viewAdded(child);
		return child;
	}
	
	public function remove(child:BaseView) : Void
	{
		if (viewRemoved != null) child.removeChildren();
		children.remove(child);
		child.parent = null;
		child.viewAdded = null;
		child.viewRemoved = null;
		element.removeChild(child.element);
		if (viewRemoved != null) viewRemoved(child);
	}
	
	public function addChildren() : Void
	{
		for (c in children)
		{
			c.viewAdded = viewAdded;
			c.viewRemoved = viewRemoved;
			c.addChildren();
			viewAdded(c);
		}	
	}
	
	public function removeChildren() : Void
	{
		for (c in children)
		{
			c.removeChildren();
			element.removeChild(c.element);
			c.parent = null;
			c.viewAdded = null;
			c.viewRemoved = null;
			if (viewRemoved != null) viewRemoved(c);
		}
	}
	
	public function removeAllChildren() : Void
	{
		while (children.length > 0) remove(children.pop());
	}
	
	public function invalidateLayout() : Void
	{
		isLayoutInvalid = true;
		if (parent != null) parent.invalidateLayout();
	}
	
	public function updateLayout() : Void
	{
		// HOOK: Override
	}
	
	public function isAdded(view:Dynamic):Bool 
	{
		return Lambda.has(children,view);
	}

}