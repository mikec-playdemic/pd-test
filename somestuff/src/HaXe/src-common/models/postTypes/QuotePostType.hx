package models.postTypes;
import js.JQuery;

/**
 * ...
 * @author MikeC
 */

class QuotePostType implements IPostType
{
	public var name : String;
	public var icon : String;
	public var description : String;
	
	public function new() 
	{
		name = "quote";
		icon = 'post_type_quote';
		description = "Post a Quote";
	}
	
	public function getHTMLFromData(data:Dynamic) : String
	{
		return data+"";
	}
}