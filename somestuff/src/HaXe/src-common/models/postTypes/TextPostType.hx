package models.postTypes;
import js.JQuery;

/**
 * ...
 * @author MikeC
 */

class TextPostType implements IPostType
{
	public var name : String;
	public var icon : String;
	public var description : String;
	
	public function new() 
	{
		name = "text";
		icon = 'post_type_text';
		description = "Post some Text";
	}
	
	public function getHTMLFromData(data:Dynamic) : String
	{
		return data+"";
	}
}