package content.views.postTypes;
import base.BaseView;
import models.postTypes.IPostType;
import content.views.common.DivView;

/**
 * ...
 * @author MikeC
 */

class PostTypeTabsView extends DivView
{
	public var types:Array<IPostType>;

	public function new() 
	{
		super('ptt_post_type_tabs');
	}	
	
	public function construct() : Void
	{
		for (t in types)
		{
			add(new PostTypeTab(t));
		}
	}
	
}