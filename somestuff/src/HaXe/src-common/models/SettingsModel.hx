package models;
import base.BaseModel;
import hsl.haxe.Signaler;
import hsl.haxe.DirectSignaler;

/**
 * ...
 * @author 
 */

class SettingsModel extends BaseModel
{
	@inject public var storage : ChromeLocalStorageModel;

	public var selectedBlogIdChanged : Signaler<String>;
	
	public var selectedBlogId(getSelectedBlogId, setSelectedBlogId) : String;
	
	public function new()
	{
		super();
		selectedBlogIdChanged = new DirectSignaler(this);
	}
	
	private function getSelectedBlogId() : String
	{			
		return storage.get('selectedBlogId');
	}
	
	private function setSelectedBlogId(value:String) : String
	{
		storage.set('selectedBlogId', value);
		selectedBlogIdChanged.dispatch(value);
		return value;
	}
	
}