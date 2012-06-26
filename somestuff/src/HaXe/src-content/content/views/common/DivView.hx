package content.views.common;
import base.BaseView;
import js.Lib;

/**
 * ...
 * @author 
 */

class DivView extends BaseView
{

	public function new(elementId:String=null) 
	{
		super(Lib.document.createElement('div'));
		if (elementId != null) element.id = elementId;
	}
	
}