package content.views.login;
import base.BaseView;
import chrome.Extension;
import content.views.common.DivView;
import content.views.common.ImgView;
import content.views.common.InputElementView;
import content.views.common.SimpleButton;
import js.JQuery;
import js.Lib;
import js.Dom;
import hsl.haxe.Signaler;
import hsl.haxe.DirectSignaler;

/**
 * ...
 * @author MikeC
 */

class LoginView extends DivView
{
	public var logo : ImgView;
	public var description : DivView;
	
	public var performLoginTrigger : Signaler<Void>;

	private var loginBtn : SimpleButton;

	public function new() 
	{
		super('ptt_login_window');
		
		performLoginTrigger = new DirectSignaler(this);
		
		logo = new ImgView(Extension.getURL("images/logo2.png"));
		add(logo);
		
		description = new DivView();
		description.element.innerHTML = "PostToTumblr requires some permissions from Tumblr before it can work.";
		description.element.style.marginTop = '20px';
		add(description);
		
		loginBtn = new SimpleButton("Request Permissions");
		loginBtn.element.id = "ptt_login_button";
		loginBtn.element.style.marginTop = '20px';
		loginBtn.clicked.addBubblingTarget(performLoginTrigger);
		add(loginBtn);
	}
	


	
}