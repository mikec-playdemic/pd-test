package content.views.primary;
import content.views.common.DivView;
import content.views.header.HeaderView;
import content.views.indicator.PostTypeIndicatorArrow;
import content.views.post.PostContentView;
import content.views.postTypes.PostTypeTabsView;
import js.JQuery;

/**
 * ...
 * @author MikeC
 */

class PrimaryView extends DivView
{
	public var header : HeaderView;
	public var contentContainer : DivView;
	public var postTypes : PostTypeTabsView;
	public var postTypeIndicatorContainer : DivView;
	public var postView : PostContentView;
	public var postViewContainer : DivView;
	public var postContentViewPositioner : DivView;
	public var indidicatorArrow : PostTypeIndicatorArrow;
	
	public function new() 
	{
		super('ptt_primary_view');	
		
		header = new HeaderView();
		header.element.id = 'ptt_header';
		add(header);
		
		contentContainer = new DivView('ptt_content');
		add(contentContainer);
		
		postTypes = new PostTypeTabsView();
		contentContainer.add(postTypes);
		
		postTypeIndicatorContainer = new DivView('ptt_post_type_indicator_arrow_container');		
		contentContainer.add(postTypeIndicatorContainer);
		
		indidicatorArrow = new PostTypeIndicatorArrow();
		postTypeIndicatorContainer.add(indidicatorArrow);
		
		postViewContainer = new DivView('ptt_content_view_container');
		contentContainer.add(postViewContainer);
		
		postContentViewPositioner = new DivView('ptt_post_content_view_positioner');
		postViewContainer.add(postContentViewPositioner);
		
		postView = new PostContentView();
		postViewContainer.add(postView);
	}
	
}