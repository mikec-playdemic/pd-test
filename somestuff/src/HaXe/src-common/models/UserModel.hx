package models;

typedef SerialisableUser =
{
	var isAuthorised : Bool;
	var tumblrDetails : TumblrDetails;
}

typedef TumblrBlogDetail =
{
	var admin : Bool;
	var ask : Bool;
	var ask_anon : Bool;
	var followers : Int;
	var name : String;
	var primary : Bool;
	var queue : Int;
	var title : String;
	var tweet : String;
	var url : String;
}

typedef TumblrDetails =
{
	var default_post_format : String;
	var following : Int;
	var likes : Int;
	var name : String;
	var blogs : Array<TumblrBlogDetail>;
}

class UserModel 
{
	public var isAuthorised : Bool;
	public var tumblrDetails : TumblrDetails;

	public function loadFromObject(obj:SerialisableUser) : Void
	{
		isAuthorised = obj.isAuthorised;
		tumblrDetails = obj.tumblrDetails;
	}
	
	public function loadFromStorage() : Void
	{
		
	}
	
	public function updateFromTumblr(result:Dynamic) : Void
	{
		tumblrDetails = result.response.user;
	}
	
	public function getAsObject() : SerialisableUser
	{
		return { isAuthorised:isAuthorised, tumblrDetails:tumblrDetails };
	}
	
	public function getPrimaryBlog() : TumblrBlogDetail
	{
		for (d in tumblrDetails.blogs)
		{
			if (d.primary) return d;
		}
		return null;
	}
	
	public function getBlog(blogId:String) : TumblrBlogDetail
	{
		for (d in tumblrDetails.blogs)
		{
			if (d.name==blogId) return d;
		}
		return null;
	}
}