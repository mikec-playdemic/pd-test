package content.views.header;
import content.views.common.DivView;
import content.views.common.ImgView;
import chrome.Extension;
import content.views.common.SimpleButton;
import js.JQuery;
import models.UserModel;
import hsl.haxe.Signaler;
import hsl.haxe.DirectSignaler;

/**
 * ...
 * @author 
 */

class BlogsSelectorView extends DivView
{
	public var blogSelected : Signaler<TumblrBlogDetail>;
	
	public var blueArrow : ImgView;
	public var list : DivView;
	
	public function new() 
	{
		super('ptt_blogs_selector_container');		
		
		blogSelected = new DirectSignaler(this);
		
		list = new DivView('ptt_blogs_selector_container_list');
		add(list);		
		
		blueArrow = new ImgView(Extension.getURL("images/light_blue_up.png"),'ptt_blogs_selector_up_arrow');
		add(blueArrow);
		
	}
	
	public function setBlogs(blogs:Array<TumblrBlogDetail>, currentlySelectedBlogId:String)
	{		
		trace('currentlySelectedBlogId '+currentlySelectedBlogId);
		
		var i = 0;
		while (i < blogs.length)
		{
			var b = blogs[i];
			
			var w = new DivView();
			w.element.className = 'ptt_blog_selector_item';			
			list.add(w);
			
			var d = new SimpleButton(b.title);		
			d.clicked.bindVoid(function() { blogSelected.dispatch(b); } );
			if (i == 0) new JQuery(d.element).css({'border-top':'0', '-webkit-box-shadow':'none'});
			if (i == 2) new JQuery(d.element).css( { 'border-bottom':'0' } );			
			w.add(d);
			
			i++;
		}
	}
	
}