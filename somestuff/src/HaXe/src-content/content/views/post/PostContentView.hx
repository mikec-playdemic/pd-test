package content.views.post;
import chrome.Extension;
import content.views.common.DivView;
import content.views.common.IconButton;
import content.views.common.ImageButton;
import js.JQuery;
import hsl.haxe.Signaler;
import hsl.haxe.DirectSignaler;
import models.postTypes.IPostType;

/**
 * ...
 * @author MikeC
 */

class PostContentView extends DivView
{
	public var captionOpened : Signaler<Void>;
	public var createPostClicked : Signaler<Void>;
	
	private var postTypeTitle : DivView;
	private var postContainer : DivView;
	private var createPostButton : IconButton;
	private var addCaptionButton : IconButton;
	private var captionPanelOpen : Bool;
	private var postCaption : PostCaptionView;
	private var postButtonsContainer : DivView;
	private var postContentAndCaptionConatiner : DivView;

	public function new() 
	{
		super('ptt_post_container');	
		
		postTypeTitle = new DivView("ptt_post_content_type_title");
		add(postTypeTitle);
		
		postContentAndCaptionConatiner = new DivView('ptt_post_content_and_caption_container');
		add(postContentAndCaptionConatiner);		
		
		postContainer = new DivView("ptt_post_content_container");
		postContentAndCaptionConatiner.add(postContainer);
		
		captionPanelOpen = false;
		captionOpened = new DirectSignaler(this);
		createPostClicked = new DirectSignaler(this);
		
		postButtonsContainer = new DivView('ptt_post_content_buttons_container');
		add(postButtonsContainer);
		
		addCaptionButton = new IconButton(Extension.getURL('images/note_edit.png'), "Add Caption");
		addCaptionButton.element.id = "ptt_add_caption_button";
		addCaptionButton.element.style.bottom = '0px';
		addCaptionButton.clicked.bindVoid(onAddCaptionClicked);
		postButtonsContainer.add(addCaptionButton);
		
		createPostButton = new IconButton(Extension.getURL('images/accept.png'), "Create Post");
		createPostButton.element.id = "ptt_create_post_button";
		createPostButton.element.style.bottom = '0px';
		createPostButton.clicked.addBubblingTarget(createPostClicked);
		postButtonsContainer.add(createPostButton);
	}
	
	private function onAddCaptionClicked():Void 
	{
		if (captionPanelOpen) return;
		postCaption = new PostCaptionView();
		postContentAndCaptionConatiner.add(postCaption);
		new JQuery(postCaption.element).insertAfter(postContainer.element);
		new JQuery(addCaptionButton.element).css({"margin-top": 0});
		new JQuery(createPostButton.element).css({"margin-top": 0});
		captionPanelOpen = true;
		captionOpened.dispatch();
		invalidateLayout();
	}
	
	public function setData(data:Dynamic, postType:IPostType) : Void
	{		
		//var beforeH : Int = new JQuery(postContainer.element).height();
		postContainer.element.innerHTML = postType.getHTMLFromData(data);
		//var afterH : Int = new JQuery(postContainer.element).height();
		
		/*
		if (beforeH != 0)
		{
			new JQuery(postContainer.element).css({height:beforeH});
			new JQuery(postContainer.element).animate( { height:afterH }, 1000);
		}
		trace("before "+beforeH+", after "+afterH);
		*/
		
		postTypeTitle.element.innerHTML = postType.description;
		
		invalidateLayout();
	}
	
	public function getCaptionText() : String
	{
		if (!captionPanelOpen) return null;
		return postCaption.getText();
	}
}