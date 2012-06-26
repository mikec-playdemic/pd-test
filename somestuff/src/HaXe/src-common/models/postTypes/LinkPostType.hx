package models.postTypes;
import js.JQuery;

/**
 * ...
 * @author MikeC
 */

class LinkPostType implements IPostType
{
	public var name : String;
	public var icon : String;
	public var description : String;
	
	public function new() 
	{
		name = "link";
		icon = 'post_type_link';
		description = "Post a Link";
	}
	
	public function getHTMLFromData(data:Dynamic) : String
	{
		return data+"";
	}
}