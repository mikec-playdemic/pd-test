package models.postTypes;
import js.JQuery;

/**
 * ...
 * @author 
 */

interface IPostType 
{
	var name : String;
	var icon : String;
	var description : String;
	function getHTMLFromData(data:Dynamic) : String;
}