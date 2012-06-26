package content.views.foreground;
import base.BaseView;
import content.views.common.DivView;
import content.views.header.HeaderView;
import content.views.indicator.PostTypeIndicatorArrow;
import content.views.login.LoginView;
import content.views.post.PostContentView;
import content.views.postTypes.PostTypeTabsView;
import content.views.primary.PrimaryView;
import js.Lib;

/**
 * ...
 * @author 
 */

class ForegroundView extends DivView
{
	public function new() 
	{
		super('ptt_foreground');
	}

	public function showLogin() : Void
	{
		removeAllChildren();
		add(new LoginView());
	}
	
	public function showPrimary() : Void
	{
		removeAllChildren();
		add(new PrimaryView());
	}
	
	
	
}