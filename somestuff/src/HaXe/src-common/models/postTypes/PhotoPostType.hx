package models.postTypes;
import js.JQuery;

/**
 * ...
 * @author 
 */

class PhotoPostType implements IPostType
{
	public var name : String;
	public var icon : String;
	public var description : String;
	
	public function new() 
	{
		name = "photo";
		icon = 'post_type_photo';
		description = "Post a Photo";
	}
	
	public function getHTMLFromData(data:Dynamic) : String
	{
		return '<img src="'+data+'" style="max-width:405px;" />';
	}
}