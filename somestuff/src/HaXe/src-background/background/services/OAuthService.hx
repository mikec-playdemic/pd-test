package background.services;
import base.BaseService;
import hxjson2.JSON;
import models.ChromeLocalStorageModel;
import CommonDefs;

/**
 * ...
 * @author MikeC
 */

class OAuthService extends BaseService
{
	public var isAuthorised(get_isAuthorised, null) : Bool;
	
	private var oauth : ChromeExOAuth;
	
	public function init() : Void
	{
		if (oauth != null) { trace('Already initted, returning'); return; }
		
		oauth = ChromeExOAuth.initBackgroundPage({
			'request_url': 'http://www.tumblr.com/oauth/request_token',
			'authorize_url': 'http://www.tumblr.com/oauth/authorize',
			'access_url': 'http://www.tumblr.com/oauth/access_token',
			'consumer_key': 'uyDrNV4EpqNth4o00n8QkCfWXgnGqjJt5WAwaO5mQo95GRbOas',
			'consumer_secret': 'URdzXZtsxto92Ji5UWraFZ3kvoAwrjvf5zxThBmLGs3qjihfiM',
			'app_name': 'PostToTumblr'
		});
		
		//oauth.clearTokens();
	}
	
	public function authorize(callbackHandler:Void->Void) : Void
	{
		oauth.authorize(callbackHandler);
	}
	
	public function getUserInfo(callbackHandler:Dynamic->Void) : Void
	{
		makeSignedRequest('http://api.tumblr.com/v2/user/info', {method:'POST'}, function(result:Dynamic) 
		{ 
			callbackHandler(result);
		});
	}
	
	public function createPost(data:CreatePostDataPacket) : Void
	{
		var o : Dynamic = { 
			type: 'text',
			//source: 'http://www.viralchart.ru/Images1/Images/Limecat/9.jpg'
			body: 'test bla bla bla'
		};
		
		/*if (data.type == 'photo')
		{
			o.source = data.data;
			o.caption = data.caption;
		}*/
		
		//makeSignedRequest('http://api.tumblr.com/v2/blog/'+data.blog.url+'post',{method:'POST', parameters:o}, function(result:Dynamic) 
		makeSignedRequest('http://api.tumblr.com/v2/blog/mikeydo.tumblr.com/post',{method:'POST', parameters:{type:'text'}, body:'hello world'}, function(result:Dynamic) 
		{ 
			if (result.meta.status != 201) { trace('POST ERROR!'); }
			else trace("POST CREATED");
		});
	}
	
	public function makeSignedRequest(url:String, request:Dynamic,callbackHandler:Dynamic->Void) : Void
	{
		oauth.sendSignedRequest(url, function(resp, xhr)
		{
			callbackHandler(JSON.decode(resp)); 
		}, request);
	}
	
	public function get_isAuthorised() : Bool
	{
		return oauth != null && oauth.hasToken();
	}
	
}