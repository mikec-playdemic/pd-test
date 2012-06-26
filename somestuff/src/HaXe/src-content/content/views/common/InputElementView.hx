package content.views.common;
import base.BaseView;
import js.Dom;
import js.JQuery;
import js.Lib;

/**
 * ...
 * @author MikeC
 */

class InputElementView extends DivView
{
	public var input : BaseView;
	public var label : BaseView;
	private var _value : String;

	public function new(type:String, id:String, labelText:String) 
	{
		super(id + "_container");
		
		element.style.position = 'relative';
		
		var fe : FormElement = cast Lib.document.createElement('label');
		new JQuery(fe).attr('for', id);
		fe.innerHTML = labelText;
		label = new BaseView(fe);
		add(label);
		
		var fe : FormElement = cast Lib.document.createElement('input');
		fe.type = type;
		fe.id = id;
		input = new BaseView(fe);
		add(input);
		
		new JQuery(input.element).bind('propertychange keyup input paste',onInputChange);

	}
	
	private function onInputChange(e) 
	{
		if (new JQuery(input.element).val().length > 0)
		{
			label.element.style.display = 'none';
		}
		else
		{
			label.element.style.display = 'block';
		}
	}
	
	private function get_value():String 
	{
		return new JQuery(input.element).val();
	}
	
	private function set_value(value:String):String 
	{
		new JQuery(input.element).val(value);
		return _value = value;
	}
	
	public var value(get_value, set_value):String;
	
}