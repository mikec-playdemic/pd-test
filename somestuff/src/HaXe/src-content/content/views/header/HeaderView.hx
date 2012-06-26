package content.views.header;
import base.BaseView;
import chrome.Extension;
import content.views.common.DivView;
import content.views.common.ImageButton;
import content.views.common.ImgView;
import js.JQuery;
import js.Lib;
import js.Dom;
import hsl.haxe.Signaler;
import hsl.haxe.DirectSignaler;

/**
 * ...
 * @author 
 */

class HeaderView extends BaseView
{
	public var logo : ImgView;
	public var selectedBlog : BaseView;
	public var optionsContainer : DivView;
	public var optionsButton : HeaderOptionButton;
	public var blogsButton : HeaderOptionButton;
	public var helpButton : HeaderOptionButton;
	public var closeButton : HeaderOptionButton;
	public var blogsSelector : BlogsSelectorView;
	public var blueArrow : ImgView;
	
	public var closeTrigger : Signaler<Void>;
	
	public function new() 
	{
		super(Lib.document.createElement('div'));
		
		closeTrigger = new DirectSignaler(this);
		
		// Add the logo		
		logo = new ImgView(Extension.getURL("images/logo2.png"));
		add(logo);
		
		blueArrow = new ImgView(Extension.getURL("images/blue_arrow_up.png"),'ptt_blue_arrow_up_header');
		add(blueArrow);
		
		// Add the container for the buttons
		optionsContainer = new DivView('ptt_header_option_buttons');		
		add(optionsContainer);
		
		blogsButton = new HeaderOptionButton("button_blogs", "Blogs");
		new JQuery(blogsButton.element).click(openBlogsSelector);
		optionsContainer.add(blogsButton);
		
		blogsSelector = new BlogsSelectorView();
		add(blogsSelector);		
		new JQuery(blogsSelector.element).css({visibility:'hidden'});
		
		helpButton = new HeaderOptionButton("button_options", "Options");
		optionsContainer.add(helpButton);		
		
		closeButton = new HeaderOptionButton("button_close", "Close");
		closeButton.clicked.addBubblingTarget(closeTrigger);
		optionsContainer.add(closeButton);
		
		// Make the selected blog label
		selectedBlog = new BaseView(Lib.document.createElement('a'));
		selectedBlog.element.id = 'ptt_selected_blog';
		new JQuery(selectedBlog.element).attr('href', '#');
		selectedBlog.element.innerHTML = "Default";
		add(selectedBlog);
	}
	
	public function setSelectedBlog(name:String) : Void
	{
		selectedBlog.element.innerHTML = name;		
		new JQuery(blueArrow.element).css({right:140+name.length});
	}
	
	private function openBlogsSelector(e:js.JqEvent) : Void
	{		
		new JQuery(blogsSelector.element).css( { visibility:'visible' } );		
		new JQuery('body').one('click',function(ee) {
			new JQuery(blogsSelector.element).css({visibility:'hidden'});	
		} );
		e.stopPropagation();
	}
	
}