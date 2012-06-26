package content.views.common;

import base.BaseView;
import js.Dom;
import js.Lib;

class ImgView extends BaseView
{
	public var img : Image;
	
	public function new(?src:String=null, elementId:String=null) 
	{
		super(img = cast Lib.document.createElement('img'));
		if (elementId != null) element.id = elementId;
		if (src != null) img.src = src;
	}	
}